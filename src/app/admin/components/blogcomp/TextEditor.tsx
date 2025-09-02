"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { useEffect } from "react";

export default function TextEditor({
  onChange,
  initialValue = "<p>Start writing...</p>",
}: {
  onChange?: (val: { html: string; text: string }) => void;  // ✅ update type
  initialValue?: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        blockquote: false,
        codeBlock: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
    ],
    immediatelyRender: false,
    content: initialValue,
  });

  // 🔥 Hook into editor updates
  useEffect(() => {
    if (!editor) return;
    editor.on("update", () => {
      const html = editor.getHTML();
      const text = editor.getText();
      if (onChange) onChange({ html, text });  // ✅ send both
    });
  }, [editor, onChange]);

  if (!editor) return null;

  return (
    <div className="border rounded-md p-2">
      {/* Toolbar */}
      <div className="flex gap-2 mb-2 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "bg-gray-200 px-2" : "px-2"}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "bg-gray-200 px-2" : "px-2"}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "bg-gray-200 px-2" : "px-2"}
        >
          U
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "bg-gray-200 px-2" : "px-2"}
        >
          • List
        </button>
        <button
          onClick={() => {
            const url = window.prompt("Enter link URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className={editor.isActive("link") ? "bg-gray-200 px-2" : "px-2"}
        >
          🔗
        </button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="prose min-h-[80px] p-2" />
    </div>
  );
}
