import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// error on use in stackblitz environment
// import react from '@vitejs/plugin-react-swc';

import svgr from 'vite-plugin-svgr';

import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgProps: {
          focusable: '{false}',
        },
      },
    }),
    TanStackRouterVite(),
    tsconfigPaths(),
  ],
});
