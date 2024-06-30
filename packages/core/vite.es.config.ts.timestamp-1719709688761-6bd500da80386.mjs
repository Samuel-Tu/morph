// vite.es.config.ts
import { defineConfig } from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/vite@5.2.12_@types+node@20.14.0_sass@1.77.4_terser@5.31.1/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.12_@types+node@20.14.0_sass@1.77.4_terser@5.31.1__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import dts from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.0_rollup@4.18.0_typescript@5.4.5_vite@5.2.12_@types+n_wmat25koifywp73gefv7usvhc4/node_modules/vite-plugin-dts/dist/index.mjs";
import { readdirSync, readdir } from "fs";
import { filter, map, delay, defer } from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell2 from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";

// hooksPlugin.ts
import { each, isFunction } from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/lodash.js";
import shell from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/shelljs@0.8.5/node_modules/shelljs/shell.js";
function hooksPlugin({
  rmFiles = [],
  beforeBuild,
  afterBuild
}) {
  return {
    name: "hooks-plugin",
    buildStart() {
      each(rmFiles, (fName) => shell.rm("-rf", fName));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err) {
      !err && isFunction(afterBuild) && afterBuild();
    }
  };
}

// vite.es.config.ts
import terser from "file:///Users/liangyingliu/Desktop/Morph/node_modules/.pnpm/@rollup+plugin-terser@0.4.4_rollup@4.18.0/node_modules/@rollup/plugin-terser/dist/es/index.js";
var __vite_injected_original_dirname = "/Users/liangyingliu/Desktop/Morph/packages/core";
var isProd = process.env.NODE_ENV === "production";
var isDev = process.env.NODE_ENV === "development";
var isTest = process.env.NODE_ENV === "test";
function getDirectoriesSync(basePath) {
  const entries = readdirSync(basePath, { withFileTypes: true });
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}
var TRY_MOVE_STYLE_DELAY = 800;
function moveStyles() {
  readdir("./dist/es/theme", (err) => {
    if (err)
      return delay(moveStyles, TRY_MOVE_STYLE_DELAY);
    defer(() => shell2.mv("./dist/es/theme", "./dist"));
  });
}
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }),
    hooksPlugin({
      rmFiles: ["./dist/es", "./dist/theme", "./dist/types"],
      afterBuild: moveStyles
    }),
    terser({
      compress: {
        sequences: isProd,
        arguments: isProd,
        drop_console: isProd && ["log"],
        drop_debugger: isProd,
        passes: isProd ? 4 : 1,
        global_defs: {
          "@DEV": JSON.stringify(isDev),
          "@PROD": JSON.stringify(isProd),
          "@TEST": JSON.stringify(isTest)
        }
      },
      format: {
        semicolons: false,
        shorthand: isProd,
        braces: !isProd,
        beautify: !isProd,
        comments: !isProd
      },
      mangle: {
        toplevel: isProd,
        eval: isProd,
        keep_classnames: isDev,
        keep_fnames: isDev
      }
    })
  ],
  build: {
    outDir: "dist/es",
    minify: false,
    cssCodeSplit: true,
    sourcemap: !isProd,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "Morph",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css")
            return "index.css";
          if (assetInfo.type === "asset" && /\.(css)$/i.test(assetInfo.name)) {
            return "theme/[name].[ext]";
          }
          return assetInfo.name;
        },
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils") || id.includes("plugin-vue:export-helper")) {
            return "utils";
          }
          for (const dirName of getDirectoriesSync("../components")) {
            if (id.includes(`/packages/components/${dirName}`)) {
              return dirName;
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiLCAiaG9va3NQbHVnaW4udHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlhbmd5aW5nbGl1L0Rlc2t0b3AvTW9ycGgvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpYW5neWluZ2xpdS9EZXNrdG9wL01vcnBoL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpYW5neWluZ2xpdS9EZXNrdG9wL01vcnBoL3BhY2thZ2VzL2NvcmUvdml0ZS5lcy5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMsIHJlYWRkaXIgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBkZWxheSwgZGVmZXIgfSBmcm9tIFwibG9kYXNoLWVzXCI7XG5pbXBvcnQgc2hlbGwgZnJvbSBcInNoZWxsanNcIjtcbmltcG9ydCBob29rcyBmcm9tIFwiLi9ob29rc1BsdWdpblwiO1xuaW1wb3J0IHRlcnNlciBmcm9tIFwiQHJvbGx1cC9wbHVnaW4tdGVyc2VyXCI7XG5cbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIjtcbmNvbnN0IGlzVGVzdCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInRlc3RcIjtcblxuZnVuY3Rpb24gZ2V0RGlyZWN0b3JpZXNTeW5jKGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgZW50cmllcyA9IHJlYWRkaXJTeW5jKGJhc2VQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSk7XG5cbiAgcmV0dXJuIG1hcChcbiAgICBmaWx0ZXIoZW50cmllcywgKGVudHJ5KSA9PiBlbnRyeS5pc0RpcmVjdG9yeSgpKSxcbiAgICAoZW50cnkpID0+IGVudHJ5Lm5hbWUsXG4gICk7XG59XG5cbmNvbnN0IFRSWV9NT1ZFX1NUWUxFX0RFTEFZID0gODAwIGFzIGNvbnN0O1xuXG5mdW5jdGlvbiBtb3ZlU3R5bGVzKCkge1xuICByZWFkZGlyKFwiLi9kaXN0L2VzL3RoZW1lXCIsIChlcnIpID0+IHtcbiAgICBpZiAoZXJyKSByZXR1cm4gZGVsYXkobW92ZVN0eWxlcywgVFJZX01PVkVfU1RZTEVfREVMQVkpO1xuICAgIGRlZmVyKCgpID0+IHNoZWxsLm12KFwiLi9kaXN0L2VzL3RoZW1lXCIsIFwiLi9kaXN0XCIpKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBkdHMoe1xuICAgICAgdHNjb25maWdQYXRoOiBcIi4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb25cIixcbiAgICAgIG91dERpcjogXCJkaXN0L3R5cGVzXCIsXG4gICAgfSksXG4gICAgaG9va3Moe1xuICAgICAgcm1GaWxlczogW1wiLi9kaXN0L2VzXCIsIFwiLi9kaXN0L3RoZW1lXCIsIFwiLi9kaXN0L3R5cGVzXCJdLFxuICAgICAgYWZ0ZXJCdWlsZDogbW92ZVN0eWxlcyxcbiAgICB9KSxcbiAgICB0ZXJzZXIoe1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgc2VxdWVuY2VzOiBpc1Byb2QsXG4gICAgICAgIGFyZ3VtZW50czogaXNQcm9kLFxuICAgICAgICBkcm9wX2NvbnNvbGU6IGlzUHJvZCAmJiBbXCJsb2dcIl0sXG4gICAgICAgIGRyb3BfZGVidWdnZXI6IGlzUHJvZCxcbiAgICAgICAgcGFzc2VzOiBpc1Byb2QgPyA0IDogMSxcbiAgICAgICAgZ2xvYmFsX2RlZnM6IHtcbiAgICAgICAgICBcIkBERVZcIjogSlNPTi5zdHJpbmdpZnkoaXNEZXYpLFxuICAgICAgICAgIFwiQFBST0RcIjogSlNPTi5zdHJpbmdpZnkoaXNQcm9kKSxcbiAgICAgICAgICBcIkBURVNUXCI6IEpTT04uc3RyaW5naWZ5KGlzVGVzdCksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZm9ybWF0OiB7XG4gICAgICAgIHNlbWljb2xvbnM6IGZhbHNlLFxuICAgICAgICBzaG9ydGhhbmQ6IGlzUHJvZCxcbiAgICAgICAgYnJhY2VzOiAhaXNQcm9kLFxuICAgICAgICBiZWF1dGlmeTogIWlzUHJvZCxcbiAgICAgICAgY29tbWVudHM6ICFpc1Byb2QsXG4gICAgICB9LFxuICAgICAgbWFuZ2xlOiB7XG4gICAgICAgIHRvcGxldmVsOiBpc1Byb2QsXG4gICAgICAgIGV2YWw6IGlzUHJvZCxcbiAgICAgICAga2VlcF9jbGFzc25hbWVzOiBpc0RldixcbiAgICAgICAga2VlcF9mbmFtZXM6IGlzRGV2LFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6IFwiZGlzdC9lc1wiLFxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxuICAgIHNvdXJjZW1hcDogIWlzUHJvZCxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJNb3JwaFwiLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICAgIGZvcm1hdHM6IFtcImVzXCJdLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcbiAgICAgICAgXCJ2dWVcIixcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIixcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIixcbiAgICAgICAgXCJAZm9ydGF3ZXNvbWUvdnVlLWZvbnRhd2Vzb21lXCIsXG4gICAgICAgIFwiQHBvcHBlcmpzL2NvcmVcIixcbiAgICAgICAgXCJhc3luYy12YWxpZGF0b3JcIixcbiAgICAgIF0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09IFwic3R5bGUuY3NzXCIpIHJldHVybiBcImluZGV4LmNzc1wiO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGFzc2V0SW5mby50eXBlID09PSBcImFzc2V0XCIgJiZcbiAgICAgICAgICAgIC9cXC4oY3NzKSQvaS50ZXN0KGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBcInRoZW1lL1tuYW1lXS5bZXh0XVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nO1xuICAgICAgICB9LFxuICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCJub2RlX21vZHVsZXNcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcInZlbmRvclwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoXCIvcGFja2FnZXMvaG9va3NcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBcImhvb2tzXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGlkLmluY2x1ZGVzKFwiL3BhY2thZ2VzL3V0aWxzXCIpIHx8XG4gICAgICAgICAgICBpZC5pbmNsdWRlcyhcInBsdWdpbi12dWU6ZXhwb3J0LWhlbHBlclwiKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIFwidXRpbHNcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChjb25zdCBkaXJOYW1lIG9mIGdldERpcmVjdG9yaWVzU3luYyhcIi4uL2NvbXBvbmVudHNcIikpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcyhgL3BhY2thZ2VzL2NvbXBvbmVudHMvJHtkaXJOYW1lfWApKSB7XG4gICAgICAgICAgICAgIHJldHVybiBkaXJOYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbGlhbmd5aW5nbGl1L0Rlc2t0b3AvTW9ycGgvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2xpYW5neWluZ2xpdS9EZXNrdG9wL01vcnBoL3BhY2thZ2VzL2NvcmUvaG9va3NQbHVnaW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2xpYW5neWluZ2xpdS9EZXNrdG9wL01vcnBoL3BhY2thZ2VzL2NvcmUvaG9va3NQbHVnaW4udHNcIjtpbXBvcnQgeyBlYWNoLCBpc0Z1bmN0aW9uIH0gZnJvbSBcImxvZGFzaC1lc1wiO1xuaW1wb3J0IHNoZWxsIGZyb20gXCJzaGVsbGpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvb2tzUGx1Z2luKHtcbiAgcm1GaWxlcyA9IFtdLFxuICBiZWZvcmVCdWlsZCxcbiAgYWZ0ZXJCdWlsZCxcbn06IHtcbiAgcm1GaWxlcz86IHN0cmluZ1tdO1xuICBiZWZvcmVCdWlsZD86IEZ1bmN0aW9uO1xuICBhZnRlckJ1aWxkPzogRnVuY3Rpb247XG59KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJob29rcy1wbHVnaW5cIixcbiAgICBidWlsZFN0YXJ0KCkge1xuICAgICAgZWFjaChybUZpbGVzLCAoZk5hbWUpID0+IHNoZWxsLnJtKFwiLXJmXCIsIGZOYW1lKSk7XG4gICAgICBpc0Z1bmN0aW9uKGJlZm9yZUJ1aWxkKSAmJiBiZWZvcmVCdWlsZCgpO1xuICAgIH0sXG4gICAgYnVpbGRFbmQoZXJyPzogRXJyb3IpIHtcbiAgICAgICFlcnIgJiYgaXNGdW5jdGlvbihhZnRlckJ1aWxkKSAmJiBhZnRlckJ1aWxkKCk7XG4gICAgfSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyxvQkFBb0I7QUFDbFcsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFDaEIsU0FBUyxhQUFhLGVBQWU7QUFDckMsU0FBUyxRQUFRLEtBQUssT0FBTyxhQUFhO0FBQzFDLE9BQU9BLFlBQVc7OztBQ042UyxTQUFTLE1BQU0sa0JBQWtCO0FBQ2hXLE9BQU8sV0FBVztBQUVILFNBQVIsWUFBNkI7QUFBQSxFQUNsQyxVQUFVLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUNGLEdBSUc7QUFDRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQ1gsV0FBSyxTQUFTLENBQUMsVUFBVSxNQUFNLEdBQUcsT0FBTyxLQUFLLENBQUM7QUFDL0MsaUJBQVcsV0FBVyxLQUFLLFlBQVk7QUFBQSxJQUN6QztBQUFBLElBQ0EsU0FBUyxLQUFhO0FBQ3BCLE9BQUMsT0FBTyxXQUFXLFVBQVUsS0FBSyxXQUFXO0FBQUEsSUFDL0M7QUFBQSxFQUNGO0FBQ0Y7OztBRGRBLE9BQU8sWUFBWTtBQVJuQixJQUFNLG1DQUFtQztBQVV6QyxJQUFNLFNBQVMsUUFBUSxJQUFJLGFBQWE7QUFDeEMsSUFBTSxRQUFRLFFBQVEsSUFBSSxhQUFhO0FBQ3ZD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
