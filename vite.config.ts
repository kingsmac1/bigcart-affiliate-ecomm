import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: true,  // ← add this line
  tanstackStart: {
    server: { entry: "server" },
  },
});