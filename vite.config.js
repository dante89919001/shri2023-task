import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import imageminPlugin from 'vite-plugin-imagemin';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [preact(), createHtmlPlugin(), cssInjectedByJsPlugin(), imageminPlugin()],
  base: "/shri2023-task/",
});