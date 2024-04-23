'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { deletePostAction } from '@/server-actions/actions';
import { revalidatePath } from 'next/cache';

import Link from 'next/link';

export default function Post({ post }) {
  localStorage.setItem('post', JSON.stringify(post));
  const router = useRouter();

  function deletePost(id: number) {
    deletePostAction(id).then(() => router.push('/'));
  }

  function DeletePostModal() {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Warning</DialogTitle>
            <DialogDescription>
              Are you sure you want to Delete this Post?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button>No</Button>
            <Button variant="destructive" onClick={() => deletePost(post?.id)}>
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      <section className="container flex justify-center mt-32">
        <article className="flex flex-col gap-5 w-1/2">
          <div className="flex">
            <div>
              <Link href="/EditPost">
                <Button>Edit</Button>
              </Link>
            </div>
            <div>
              <DeletePostModal />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-3xl">{post?.title}</div>
            <div className="text-6xl">{post?.id}</div>
          </div>
          <div
            className="text-container"
            dangerouslySetInnerHTML={{ __html: post?.content as string }}
          />
          {/* <div>{post?.content}</div> */}
        </article>
      </section>
    </>
  );
}
