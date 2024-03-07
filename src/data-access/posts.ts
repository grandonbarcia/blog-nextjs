import prisma from '../../prisma/client';

export async function getAllPosts() {
  return await prisma.post.findMany();
}
