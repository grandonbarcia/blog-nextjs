'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Toolbar } from './ToolBar';
import { useEffect } from 'react';

const Tiptap = ({
  onChange,
  formSpecies,
}: {
  formSpecies: string;
  onChange: (richText: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          'prose [&_ol]:list-decimal [&_ul]:list-disc rounded-md border min-h-[350px] min-w-[350px] max-w-[350px] border-input p-2 ',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (formSpecies == 'edit') {
      editor?.commands.setContent(
        JSON.parse(localStorage.getItem('post')).content
      );
    }
  }, [editor, formSpecies]);

  return (
    <div className="flex flex-col gap-1">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
