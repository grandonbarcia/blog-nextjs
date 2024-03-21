'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Tiptap = ({
  description,
  onChange,
}: {
  description: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    editorProps: {
      attributes: {
        class:
          'rounded-md border min-h-[250px] min-w-[250px] border-input p-2 ',
      },
    },
    content: description,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
