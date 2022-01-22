import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const isProduction = process.env.NODE_ENV === 'production'
export default defineConfig({
  plugins: [vue()],
  //配置别名
  resolve: {
    alias: [{ find: '/@', replacement: path.resolve(__dirname, './src') }],
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 4000,
    open: true,
    https: false,
    proxy: {
      '/api': {
        target: isProduction ? 'http://47.111.80.240:9191/justpower/sys/' : '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  optimizeDeps: {
    include: ['axios', 'nprogress'],
  },
  // 生产环境打包配置
  build: {},
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "/@/style/main.scss";',
      },
    },
  },
})
