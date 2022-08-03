import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "images", replacement: path.resolve(__dirname, "src/assets/images") },
      { find: "components", replacement: path.resolve(__dirname, "src/components") },
      { find: "pages", replacement: path.resolve(__dirname, "src/pages") },
      { find: "hooks", replacement: path.resolve(__dirname, "src/hooks") },
      { find: "helpers", replacement: path.resolve(__dirname, "src/helpers") }
    ],
  },
});
