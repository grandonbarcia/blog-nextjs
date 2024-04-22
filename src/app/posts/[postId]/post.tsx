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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function Post({ post }) {
  localStorage.setItem('post', JSON.stringify(post));

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
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="destructive">Delete</Button>
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
