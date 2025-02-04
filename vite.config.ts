import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    tailwindcss(), 
    Icons({
      compiler: 'svelte',
    })
  ],
  resolve: {
    alias: {
      $lib: path.resolve("./src/lib"),
    },
  },
})
