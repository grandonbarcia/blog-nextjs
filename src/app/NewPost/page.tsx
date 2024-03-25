'use client';

import {
  Form,
  FormLabel,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form';

import { LoaderIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import TipTap from './TipTap';
import { createPostAction } from '@/server-actions/actions';

export default function NewPost() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'hey the title is not long enough' })
      .max(15, { message: 'hey the title is too long ' })
      .trim(),
    content: z
      .string()
      .min(5, { message: 'hey the content is not long enough' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      content: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createPostAction(values).then(() => console.log('OnSubmit Success'));
  }

  return (
    <>
      <div className="container h-screen w-2/3 flex flex-col  items-center justify-center ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-5">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Main title of your post"
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <TipTap onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="my-4" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
