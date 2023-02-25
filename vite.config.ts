import { defineConfig } from "vite";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import viteCompression from "vite-plugin-compression";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    chunkSplitPlugin({
      strategy: "default",
    }),
    viteCompression(),
  ],
});
