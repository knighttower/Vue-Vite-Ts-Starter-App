import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { config } from 'dotenv';

// load .env file
config();

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
    return {
        plugins: [vue()],
        resolve: {
            alias: {
                '@components': resolve(__dirname, 'src/components'),
                '@': resolve(__dirname, 'src'),
            },
            modules: ['node_modules', resolve(__dirname, 'src'), resolve(__dirname, 'packages/*')],
        },
    };
});
