import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // "@/..." imports resolve from src/ (mirrors "paths" in tsconfig.json).
  resolve: { alias: [{ find: /^@\//, replacement: "/src/" }] },
});
