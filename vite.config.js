import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import imageminPlugin from 'vite-plugin-imagemin';
import compression from 'vite-plugin-compression';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { createHtmlPlugin } from "vite-plugin-html";


export default defineConfig({
  plugins: [preact(), createHtmlPlugin(), cssInjectedByJsPlugin(), imageminPlugin(), compression({ algorithm: 'brotliCompress' })],
  base: "/shri2023-task/",
});