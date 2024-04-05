import Post from './post';
import { getPostById } from '@/data-access/posts';

export default async function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPostById(parseInt(params.postId));

  return (
    <>
      <Post post={post} />
    </>
  );
}
