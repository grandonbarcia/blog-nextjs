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

export async function getUser(email: string | undefined) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}
