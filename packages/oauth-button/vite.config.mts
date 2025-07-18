import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    resolve: {
        alias: {
            '@charmr/oauth-core': path.resolve(__dirname, '../oauth-core/dist/index.js'),
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'index.ts'),
            name: 'OAuthButton',
            formats: ['es', 'umd'],
            fileName: (format) => {
                if (format === 'es') return 'index.mjs';
                if (format === 'umd') return 'index.js';
                return `index.${format}.js`;
            }

        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});


