import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"), // Hauptdatei für den Export
      name: "MeineLibrary", // Name der Bibliothek
      fileName: (format) => `meine-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Damit React nicht mit eingebaut wird
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
