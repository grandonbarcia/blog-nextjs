import { getPostById } from '@/data-access/posts';

export default async function PostDetails({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPostById(parseInt(params.postId));

  return (
    <>
      <section className="container flex justify-center mt-32">
        <article className="flex flex-col gap-5 w-1/2">
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
