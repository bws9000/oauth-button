import { defineConfig } from 'vite';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  resolve: {
    alias: {
      '@charmr/oauth-core': path.resolve(__dirname, '../oauth-core/dist/index.js'),
    },
    extensions: ['.ts', '.js'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'OAuthButtonWeb',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es') return 'index.mjs';
        if (format === 'umd') return 'index.js';
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});