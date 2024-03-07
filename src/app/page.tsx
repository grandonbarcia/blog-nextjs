import Image from 'next/image';
import PostsList from './PostsList';
import { ModeToggle } from '@/components/ModeToggle';
export default function Home() {
  return (
    <main className="container h-screen flex flex-col  items-center text-left gap-6">
      <div className="grid col-span-1 gap-28 mt-16">
        <div>
          <h1>@brandonGarcia</h1>
        </div>
        <div className="flex items-center">
          <ModeToggle />
          <h1 className="text-3xl ml-3 font-bold">Blog</h1>
        </div>
        <PostsList />
      </div>
    </main>
  );
}
