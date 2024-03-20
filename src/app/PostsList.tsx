import { unstable_noStore } from 'next/cache';
import { getAllPosts } from '@/data-access/posts';
import Link from 'next/link';

export default async function TodoList() {
  unstable_noStore();
  const posts = await getAllPosts();

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString();
  }

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li className="flex justify-between items-center gap-2 w-[200px] ">
              <div>{formatDate(post.createdAt)}</div>
              <div>{post.id}</div>
              <div>{post.title}</div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
