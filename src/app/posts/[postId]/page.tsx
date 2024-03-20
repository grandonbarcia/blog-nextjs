import { getPostById } from '@/data-access/posts';

export default async function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPostById(parseInt(params.postId));
  console.log(post);
  return (
    <>
      <section className="container flex justify-center">
        <article className="w-1/2">
          <h1>PostDetails {params.postId}</h1>
          <div>{post?.id}</div>
          <div>{post?.title}</div>
          <div>{post?.content}</div>
        </article>
      </section>
    </>
  );
}
