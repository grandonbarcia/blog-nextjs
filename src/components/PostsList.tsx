import { unstable_noStore } from 'next/cache';
import { getAllPosts } from '@/data-access/posts';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function TodoList() {
  const posts = await getAllPosts();

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li className="flex justify-between items-center w-[400px] ">
              <div className="flex gap-2">
                <div>{post.id}</div>
                <div>{post.title}</div>
              </div>
              <div>{formatDate(post.createdAt)}</div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
