import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Post({ post }) {
  localStorage.setItem('post', JSON.stringify(post));
  return (
    <section className="container flex justify-center mt-32">
      <article className="flex flex-col gap-5 w-1/2">
        <div className="w-1/3">
          <Link href="/PostForm">
            <Button>Edit</Button>
          </Link>
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
  );
}
