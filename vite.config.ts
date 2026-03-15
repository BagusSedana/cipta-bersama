import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    cssInjectedByJsPlugin(),
  ],

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Use esbuild for faster minification
    minify: 'esbuild',
    // Inline assets smaller than 4KB
    assetsInlineLimit: 4096,
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Raise chunk size warning limit 
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // Code splitting: separate vendor and motion chunks
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion': ['motion'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
})
