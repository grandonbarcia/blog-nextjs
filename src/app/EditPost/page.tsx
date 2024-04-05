'use client';

import PostForm from '@/components/PostForm';

export default function EditPost() {
  console.log(JSON.parse(localStorage.getItem('post')));
  return (
    <>
      <PostForm />
    </>
  );
}
