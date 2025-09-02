// Unlayer configuration
export const UNLAYER_API_KEY = process.env.NEXT_PUBLIC_UNLAYER_API_KEY || 'RQKIv3QeQBn2WFbryHWQ18xiIKdjgD1SGxSoi8dQwnEOl8biJzJdkbfgIU5gnVPz';

// Unlayer editor options - Simplified for better UX
export const UNLAYER_OPTIONS = {
  displayMode: 'email' as const,
  features: {
    preview: false, // Disable preview to save space
    imageEditor: true,
    stockImages: true,
    textEditor: {
      spellChecker: true,
      tables: false, // Disable complex features
      cleanPaste: true,
    },
  },
  appearance: {
    theme: 'light' as const,
    panels: {
      tools: {
        dock: 'left' as const,
        show: true,
        size: 280, // Slightly smaller for more canvas space
      },
      settings: {
        dock: 'right' as const,
        show: true,
        size: 280, // Slightly smaller for more canvas space
      },
    },
    sidebar: {
      show: false, // Hide sidebar to save space
    },
  },
  customJS: [],
  customCSS: [],
  mergeTags: {} as any,
  user: {
    id: 'admin',
    name: 'Admin',
    email: 'admin@manilla.com'
  },
  locale: 'en-US',
  safeHtml: true,
  customFonts: [],
  blocks: [],
  snippets: [],
};
