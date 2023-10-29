import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  base : "/htm-4",
})
=======
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
>>>>>>> 3d6cd81ed39210e2f6372e08c774c592d930027d
