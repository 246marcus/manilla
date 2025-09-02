'use client';

import { useEffect, useRef, useState } from 'react';
import EmailEditor from 'react-email-editor';
import { UNLAYER_API_KEY, UNLAYER_OPTIONS } from '../../lib/unlayer-config';

interface UnlayerEditorProps {
  value: string;
  onChange: (value: string) => void;
  onLoad?: () => void;
  apiKey?: string;
}

const UnlayerEditor = ({ value, onChange, onLoad, apiKey }: UnlayerEditorProps) => {
  const emailEditorRef = useRef<any>(null);
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (emailEditorRef.current && value && isEditorReady) {
      try {
        // Load existing design if value exists
        const design = JSON.parse(value);
        emailEditorRef.current.loadDesign(design);
      } catch (error) {
        console.log('No existing design to load');
      }
    }
  }, [value, isEditorReady]);

  const onDesignLoad = (data: any) => {
    console.log('Design loaded:', data);
    setIsEditorReady(true);
    
    // Show welcome message if no existing design
    if (!value) {
      setTimeout(() => {
        alert('Welcome to the Email Builder! 🎉\n\nHere\'s how to get started:\n1. Look for the "Content" section on the left\n2. Drag text, images, or buttons to the center\n3. Click on elements to edit them\n4. Use the right panel to change colors and styles\n\nClick OK to start designing!');
      }, 1000);
    }
    
    if (onLoad) onLoad();
  };

  const onError = (error: any) => {
    console.error('Unlayer editor error:', error);
    setError('Failed to load email editor. Please refresh the page.');
  };

  const onSave = () => {
    if (emailEditorRef.current && isEditorReady) {
      emailEditorRef.current.saveDesign((saveJson: any) => {
        onChange(JSON.stringify(saveJson));
      });
    }
  };

  const exportHtml = (callback: (html: string) => void) => {
    if (emailEditorRef.current && isEditorReady) {
      emailEditorRef.current.exportHtml((data: any) => {
        const { html } = data;
        callback(html);
      });
    }
  };

  if (error) {
    return (
      <div className="border border-gray-300 rounded-lg p-8 text-center">
        <div className="text-red-500 mb-4">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-lg font-semibold">Editor Error</p>
        </div>
        <p className="text-gray-600 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Page
        </button>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden h-full bg-white">
      {/* Simple Header */}
      <div className="bg-blue-600 p-4 text-white">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span className="text-lg font-bold">Simple Email Builder</span>
          </div>
          <button
            type="button"
            onClick={onSave}
            disabled={!isEditorReady}
            className="px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 disabled:opacity-50 font-semibold"
          >
            {isEditorReady ? 'Save Design' : 'Loading...'}
          </button>
        </div>
      </div>
      
      {/* Simple Instructions */}
      {isEditorReady && (
        <div className="bg-yellow-50 border-b border-yellow-200 p-3">
          <div className="flex items-center gap-2 text-yellow-800">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-medium">How to use:</span>
            <span className="text-sm">1. Drag elements from the left panel to the center 2. Click on elements to edit them 3. Use the right panel to customize styles</span>
          </div>
        </div>
      )}
      
      {/* Editor Container - Full Width */}
      <div className="h-full w-full" style={{ minHeight: '600px' }}>
        <EmailEditor
          ref={emailEditorRef}
          onLoad={onDesignLoad}
          style={{ height: '100%', width: '100%', minHeight: '600px' }}
          options={UNLAYER_OPTIONS}
          projectId={Number(apiKey || UNLAYER_API_KEY)}
        />
      </div>
    </div>
  );
};

export default UnlayerEditor;
