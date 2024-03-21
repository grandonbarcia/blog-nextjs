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
import * as z from 'zod';

export default function NewPost() {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'hey the title is not long enough' })
      .max(10, 'hey the title is too long')
      .trim(),
    content: z
      .string()
      .min(5, { message: 'hey the content is not long enough' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    mode: 'onChange',
    defaultValues: {
      title: '',
      content: '',
    },
  });

  return (
    <>
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Main title of yourpost"></Input>
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
                  {/* <Tiptap description={field.name} onChang={field.onChange} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
