import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import CodeBlock from '@tiptap/extension-code-block';

import { Button, Flex } from "@mantine/core";

import React from 'react';

export default function TiptapEditor({ onSave, onShow }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      CodeBlock,
    ],
    content: '<p>Yazınızı buraya yazın...</p>',
  });

  if (!editor) return null;

  const ButtonStyle = {
    marginRight: '0.5rem',
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    background: '#fff',
    cursor: 'pointer',
  }
  
  const showHandle = () => {
	if (editor) {
		const html = editor.getHTML();
		onShow(html);
	}
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '1rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap' }}>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleBold().run()} style={ButtonStyle}><strong>B</strong></Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleItalic().run()} style={ButtonStyle}><em>I</em></Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleUnderline().run()} style={ButtonStyle}><u>U</u></Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} style={ButtonStyle}>H1</Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={ButtonStyle}>H2</Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleBulletList().run()} style={ButtonStyle}>• Liste</Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleOrderedList().run()} style={ButtonStyle}>1. Liste</Button>
        <Button variant="default" color="gray" onClick={() => editor.chain().focus().toggleCodeBlock().run()} style={ButtonStyle}>{'</>'}</Button>
      </div>

      <div aria-label="Yazı editörü">
        <EditorContent editor={editor} className="my-editor" />
      </div>

      <Flex 
		gap={10}
	  >
		  <Button mt="md" onClick={showHandle}>
			Görünüm
		  </Button>
		  <Button 
			  variant="filled" 
			  mt="md" 
			  color="green"
		  >Kaydet</Button>
	  </Flex>
    </div>
  );
}
