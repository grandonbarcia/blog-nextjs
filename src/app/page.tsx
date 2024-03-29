import Image from 'next/image';
import PostsList from '../components/PostsList';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
          <Link className="ml-auto opacity-0 hover:opacity-100" href="/NewPost">
            <Button>Admin</Button>
          </Link>
        </div>
        <PostsList />
      </div>
    </main>
  );
}
