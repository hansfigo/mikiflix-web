import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
 plugins: [react()],
 build: {
   outDir: 'build', // specify the output directory
 },
})


// export default defineConfig({
// 	plugins: [react(), viteSingleFile()],
// })
//export default defineConfig({
//  plugins: [cssInjectedByJsPlugin()],
//  build: {
//    rollupOptions: {
//      output: {
//        manualChunks: undefined,
//      },
//    },
//  },
//});
