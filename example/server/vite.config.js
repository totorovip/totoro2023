import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [vue()],
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, '/src'),
      },
      // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    server: {
      port: '3001', // 默认端口是 3000，这里改成了 3001
      // 配置代理
      proxy: {
        '/api': {
          target: 'http://localhost:1129',
        }
      },
    }
  }
})
