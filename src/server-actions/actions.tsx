'use server';

// import { prisma } from '../../prisma/client';
import prisma from '../../prisma/client';
type PostData = {
  title?: string;
  content?: string;
};

export async function createPostAction(postData: PostData) {
  return await prisma.post.create({
    data: {
      title: postData.title,
      content: postData.content,
    },
  });
}

export async function editPostAction(postData: PostData, id: number) {
  return await prisma.post.update({
    where: { id: id },
    data: {
      title: postData.title,
      content: postData.content,
    },
  });
}

export async function getUser(email: string | undefined) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

export async function deletePostAction(id: number) {
  return await prisma.post.delete({
    where: {
      id: id,
    },
  });
}
