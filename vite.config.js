import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glob from "glob";
import fse from "fs-extra";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Call React.
    react(),
    {
      // Custom function to copy and rename the built js file.
      // That way, Drupal can always target the same filename in
      // its library yaml file in the theme.
      name: "copy-and-rename-plugin",
      apply: "build",
      async writeBundle(outputOptions, bundle) {
        // Glob the built JS file.
        const files = glob.sync(`${outputOptions.dir}/assets/*.js`);
        const originalPath = files[0];
        const newPath = `${outputOptions.dir}/assets/renamed-build.js`;
        // Copy the built JS file to the new path.
        await fse.copy(originalPath, newPath);
        // Rename the copied JS file.
        await fse.rename(newPath, `${outputOptions.dir}/assets/bears.js`);
      },
    },
  ],
  build: {
    sourcemap: false,
    // Set the output directory here.
    outDir: "dist",
  },
});
