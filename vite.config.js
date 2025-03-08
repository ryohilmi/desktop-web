const { defineConfig } = require("vite");

module.exports = defineConfig({
  // base: "/desktop-web/",
  build: {
    rollupOptions: {
      input: "./index.html",
    },
  },
});
