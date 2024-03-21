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

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import TipTap from './TipTap';

export default function NewPost() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'hey the title is not long enough' })
      .max(10, { message: 'hey the title is too long ' })
      .trim(),
    content: z
      .string()
      .min(5, { message: 'hey the content is not long enough' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
    },
  });

  function onSubmit() {}

  return (
    <>
      <div className='container h-screen w-1/2  flex flex-col  items-center text-left gap-6"'>
        <Form {...form}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
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
                  <TipTap description={field.name} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="my-4" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
