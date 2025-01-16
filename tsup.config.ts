import { copyFile } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  injectStyle: true,
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
  async onSuccess() {
    copyFile("plugin.js", "dist/plugin.js", (err) => {
      if (err) {
        console.error(err);
      }
    });
  },
});
