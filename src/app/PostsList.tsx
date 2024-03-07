import { unstable_noStore } from 'next/cache';
import { getAllPosts } from '@/data-access/posts';

export default async function TodoList() {
  unstable_noStore();
  const posts = await getAllPosts();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="flex justify-between items-center gap-2 w-[200px] mb-6"
          >
            <div>{post.content}</div>
          </li>
        ))}
      </ul>
    </>
  );
}
