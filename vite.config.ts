// Vite Imports
import { ConfigEnv, defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// NodeJs Imports
import { dirname, resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const { command } = configEnv;
  const isBuild = command === "build";

  return {
    plugins: [react()],

    // Path Alias
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // ** CSS
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss" as *;`,
        },
      },
      modules: {
        localsConvention: "camelCaseOnly",
      },
    },

    // Base URL
    base: isBuild ? "./" : "/mui",

    // ** Build
    build: build(configEnv),

    // DEV Server
    server: server(configEnv),
  };
});

function build({ mode }: ConfigEnv): UserConfig["build"] {
  void mode;

  return {
    outDir: resolve(__dirname, "./docs"),
  };
}

function server({ mode }: ConfigEnv): UserConfig["server"] {
  void mode;

  return {
    https: false,
    fs: { allow: [resolve(__dirname, "../../")] },
    port: 3006,
    proxy: {
      "/dev": {
        ws: true,
        changeOrigin: true,
        target: "http://127.0.0.1",
        rewrite(path) {
          return path.replace(/^\/dev/, "");
        },
      },
    },
  };
}
