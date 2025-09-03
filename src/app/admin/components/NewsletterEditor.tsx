"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { 
  Bold, 
  Italic, 
  Underline, 
  Link, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  List,
  ListOrdered
} from "lucide-react";
import "./styles.css";

interface NewsletterEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const NewsletterEditor: React.FC<NewsletterEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Write your newsletter content here..." 
}) => {
  const [isClient, setIsClient] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInternalValue(newValue);
    onChange(newValue);
  }, [onChange]);

  const insertText = useCallback((text: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const before = internalValue.substring(0, start);
      const after = internalValue.substring(end);
      const newValue = before + text + after;
      
      setInternalValue(newValue);
      onChange(newValue);
      
      // Set cursor position after inserted text
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + text.length, start + text.length);
      }, 0);
    }
  }, [internalValue, onChange]);

  const wrapSelection = useCallback((before: string, after: string) => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = internalValue.substring(start, end);
      const beforeText = internalValue.substring(0, start);
      const afterText = internalValue.substring(end);
      const newValue = beforeText + before + selectedText + after + afterText;
      
      setInternalValue(newValue);
      onChange(newValue);
      
      // Set cursor position to wrap the selection
      setTimeout(() => {
        textarea.focus();
        if (selectedText) {
          textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length);
        } else {
          textarea.setSelectionRange(start + before.length, start + before.length);
        }
      }, 0);
    }
  }, [internalValue, onChange]);

  const makeBold = useCallback(() => {
    wrapSelection('**', '**');
  }, [wrapSelection]);

  const makeItalic = useCallback(() => {
    wrapSelection('*', '*');
  }, [wrapSelection]);

  const makeUnderline = useCallback(() => {
    wrapSelection('<u>', '</u>');
  }, [wrapSelection]);

  const insertLink = useCallback(() => {
    const url = prompt('Enter URL:');
    if (url) {
      const text = prompt('Enter link text (optional):') || url;
      wrapSelection(`[${text}](${url})`, '');
    }
  }, [wrapSelection]);

  const insertHeading = useCallback((level: number) => {
    const prefix = '#'.repeat(level) + ' ';
    insertText(prefix);
  }, [insertText]);

  const insertList = useCallback((ordered: boolean) => {
    if (ordered) {
      insertText('1. ');
    } else {
      insertText('- ');
    }
  }, [insertText]);

  const alignText = useCallback((alignment: string) => {
    // For markdown, we'll use HTML alignment
    switch (alignment) {
      case 'left':
        wrapSelection('<div style="text-align: left;">', '</div>');
        break;
      case 'center':
        wrapSelection('<div style="text-align: center;">', '</div>');
        break;
      case 'right':
        wrapSelection('<div style="text-align: right;">', '</div>');
        break;
    }
  }, [wrapSelection]);

  const clearFormatting = useCallback(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = internalValue.substring(start, end);
      
      // Remove markdown formatting
      const cleanedText = selectedText
        .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
        .replace(/\*(.*?)\*/g, '$1') // Italic
        .replace(/<u>(.*?)<\/u>/g, '$1') // Underline
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
        .replace(/^#{1,6}\s/gm, '') // Headings
        .replace(/^[-\d+]\s/gm, '') // Lists
        .replace(/<div[^>]*>(.*?)<\/div>/g, '$1'); // Alignment divs
      
      const beforeText = internalValue.substring(0, start);
      const afterText = internalValue.substring(end);
      const newValue = beforeText + cleanedText + afterText;
      
      setInternalValue(newValue);
      onChange(newValue);
      
      // Set cursor position
      setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start, start + cleanedText.length);
      }, 0);
    }
  }, [internalValue, onChange]);

  if (!isClient) {
    return (
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="text-editor">
      {/* Custom Toolbar */}
      <div className="ql-toolbar">
        <span className="ql-formats">
          <select 
            className="ql-header"
            onChange={(e) => {
              if (e.target.value) {
                insertHeading(parseInt(e.target.value));
              }
            }}
          >
            <option value="">Normal</option>
            <option value="1">Heading 1</option>
            <option value="2">Heading 2</option>
            <option value="3">Heading 3</option>
          </select>
        </span>
        
        <span className="ql-formats">
          <button
            type="button"
            onClick={makeBold}
            className="ql-bold"
            title="Bold (Ctrl+B)"
          >
            <Bold size={16} />
          </button>
          <button
            type="button"
            onClick={makeItalic}
            className="ql-italic"
            title="Italic (Ctrl+I)"
          >
            <Italic size={16} />
          </button>
          <button
            type="button"
            onClick={makeUnderline}
            className="ql-underline"
            title="Underline (Ctrl+U)"
          >
            <Underline size={16} />
          </button>
        </span>
        
        <span className="ql-formats">
          <button
            type="button"
            onClick={insertLink}
            className="ql-link"
            title="Insert Link"
          >
            <Link size={16} />
          </button>
        </span>
        
        <span className="ql-formats">
          <button
            type="button"
            onClick={() => alignText('left')}
            className="ql-align"
            title="Align Left"
          >
            <AlignLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => alignText('center')}
            className="ql-align"
            title="Align Center"
          >
            <AlignCenter size={16} />
          </button>
          <button
            type="button"
            onClick={() => alignText('right')}
            className="ql-align"
            title="Align Right"
          >
            <AlignRight size={16} />
          </button>
        </span>
        
        <span className="ql-formats">
          <button
            type="button"
            onClick={() => insertList(false)}
            className="ql-list"
            title="Bullet List"
          >
            <List size={16} />
          </button>
          <button
            type="button"
            onClick={() => insertList(true)}
            className="ql-list"
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </button>
        </span>
        
        <span className="ql-formats">
          <button
            type="button"
            onClick={clearFormatting}
            className="ql-clean"
            title="Clear Formatting"
          >
            Clear
          </button>
        </span>
      </div>
      
      {/* Editor */}
      <div className="ql-container">
        <textarea
          ref={textareaRef}
          value={internalValue}
          onChange={handleTextChange}
          className="ql-editor-textarea"
          placeholder={placeholder}
          spellCheck="false"
          style={{
            direction: 'ltr',
            textAlign: 'left',
            unicodeBidi: 'normal',
            writingMode: 'horizontal-tb',
            textOrientation: 'mixed'
          }}
        />
      </div>
    </div>
  );
};

export default NewsletterEditor;
