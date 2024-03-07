import { unstable_noStore } from 'next/cache';
import { getAllPosts } from '@/data-access/posts';

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
          <li
            key={post.id}
            className="flex justify-between items-center gap-2 w-[200px] "
          >
            <div>{formatDate(post.createdAt)}</div>
            <div>{post.id}</div>
            <div>{post.title}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
