import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glob from "glob";
import fse from "fs-extra";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "copy-and-rename-plugin",
      apply: "build",
      async writeBundle(outputOptions, bundle) {
        // find the built JS file
        const files = glob.sync(`${outputOptions.dir}/assets/*.js`);
        const originalPath = files[0];
        const newPath = `${outputOptions.dir}/assets/renamed-build.js`;
        // copy the built JS file to the new path
        await fse.copy(originalPath, newPath);
        // rename the copied JS file
        await fse.rename(newPath, `${outputOptions.dir}/assets/bears.js`);
      },
    },
  ],
  build: {
    sourcemap: false,
    outDir: "dist", // Set the output directory here
  },
});
