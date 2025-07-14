import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

import * as path from "path"

function way(name: string): any {
  return path.resolve(__dirname, name)
}

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
	  port: 8000
  },
  resolve: {
    alias: {
      "~": way("src"),
      "@pages": way("src/pages/index"),
      '@requests': way('src/helpers/requests'),
      '@ui': way('src/components/ui/index'),
      '@components': way('src/components/index'),
    }
  }
})
