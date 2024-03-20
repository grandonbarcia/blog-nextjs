import prisma from '../../prisma/client';

export async function getAllPosts() {
  return await prisma.post.findMany();
}

export async function getPostById(id: number) {
  return await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
}
