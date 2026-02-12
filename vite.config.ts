import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// error on use in stackblitz environment
// import react from '@vitejs/plugin-react-swc';

import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const BASE_PATH = process.env.BASE_PATH || '/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
    tsconfigPaths(),
  ],
  base: BASE_PATH,
  define: {
    'import.meta.env.BASE_PATH': JSON.stringify(BASE_PATH),
  },
});
