import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import compression from 'vite-plugin-compression';
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { createHtmlPlugin } from "vite-plugin-html";
import { terser } from "rollup-plugin-terser";


export default defineConfig({
  plugins: [preact(),  createHtmlPlugin(), cssInjectedByJsPlugin(),  compression({ algorithm: 'brotliCompress' }), terser()],
  base: "/shri2023-task/",
});