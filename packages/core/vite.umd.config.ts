import { defineConfig } from "vite";
import { delay, defer } from "lodash-es";
import { resolve } from "path";
import { readFile } from "fs";

import shell from "shelljs";
import vue from "@vitejs/plugin-vue";
import { compression } from "vite-plugin-compression2";
import hooks from "./hooksPlugin";
import terser from "@rollup/plugin-terser";

const TRY_MOVE_STYLE_DELAY = 800 as const;

const isProd = process.env.NODE_ENV === "production";
const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

function moveStyles() {
  readFile("./dist/umd/index.css.gz", (err) => {
    if (err) return delay(moveStyles, TRY_MOVE_STYLE_DELAY);
    defer(() => shell.cp("./dist/umd/index.css", "./dist/index.css"));
  });
}

export default defineConfig({
  plugins: [
    vue(),
    compression({
      include: /.(cjs|css)$/i,
    }),
    terser({
      compress: {
        drop_console: ["log"],
        drop_debugger: true,
        passes: 3,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest),
        },
      },
    }),
    hooks({
      rmFiles: ["./dist/umd", "./dist/index.css"],
      afterBuild: moveStyles,
    }),
  ],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__dirname, "./index.ts"),
      name: "Morph",
      fileName: "index",
      formats: ["umd"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name as string;
        },
      },
    },
  },
});
