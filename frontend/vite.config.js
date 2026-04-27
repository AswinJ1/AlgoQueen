import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Enables @/components/ui
    },
  },
   server: {
    host: "0.0.0.0",   // 🔥 THIS IS IMPORTANT
    port: 5173         // optional (default is 5173)
  }
});
