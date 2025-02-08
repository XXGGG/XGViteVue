import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from "unocss/vite";
import Components from 'unplugin-vue-components/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  
  plugins: [
    vue(),
    VueRouter({  // 添加 Vue Router 插件
      routesFolder: 'src/pages',  // 设置路由生成的文件夹
    }),
    UnoCSS(),  // 添加 Unocss 插件
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue'], // 组件扩展名
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      deep: true, // 允许扫描子目录
      dts: 'src/components.d.ts', // 生成 TypeScript 类型
    }),
  ],
  
})
