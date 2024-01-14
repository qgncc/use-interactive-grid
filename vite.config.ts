import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPath()],
});
