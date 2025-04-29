import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
  // 配置AutoImport
  AutoImport({
    imports:["vue","vue-router"],
    dts:'src/auto-import.d.ts'    // 路径下自动生成文件夹存放全局指令
  }),
],
  //添加别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 正确配置 '@' 指向 'src' 目录
    }
  }
})
