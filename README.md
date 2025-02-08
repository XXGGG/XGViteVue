<p align='center'>
  <img src='public/favicon-dark.svg' width='100'/>
</p>

<p align='center'>
快速地创建 Web 应用：Vite + Vue + TypeScript
</p>

<br>

> **Note**:  一个模仿 [Vitesse](https://github.com/antfu-collective/vitesse) 的起手架，减少了一些我不会用，少用的功能。

<br>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core) + [Vite](https://github.com/vitejs/vite) + TypeScript

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org)

- 🎨 [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- 😃 [图标Icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

- 📥 [API 自动加载](https://github.com/unplugin/unplugin-auto-import) - 直接使用 Composition API 无需引入

### 这些👇暂时没有
- 📑 [布局系统](./src/layouts) 
- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)
- 🌍 [I18n 国际化开箱即用](./locales)
- 🗒 [Markdown 支持](https://github.com/unplugin/unplugin-vue-markdown)
- 🖨 使用 [vite-ssg](https://github.com/antfu/vite-ssg) 进行服务端生成 (SSG)

<br>

## 预配置

### UI 框架

- [UnoCSS](https://github.com/antfu/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

### Icons

- [Iconify](https://iconify.design) - 使用任意的图标集，浏览：[🔍Icônes](https://icones.netlify.app/)
- [UnoCSS 的纯 CSS 图标方案](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

### 插件

- [Vue Router](https://github.com/vuejs/router)
  - [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - 以文件系统为基础的路由
- [Pinia](https://pinia.vuejs.org) - 直接的, 类型安全的, 使用 Composition API 的轻便灵活的 Vue 状态管理
  - [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
  - [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 等，无需导入  
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
  - [`@vueuse/head`](https://github.com/vueuse/head) - 响应式地操作文档头信息

### 这些👇暂时没有
- [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`unplugin-vue-markdown`](https://github.com/unplugin/unplugin-vue-markdown) - Markdown 作为组件，也可以让组件在 Markdown 中使用
- [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
- [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - 利用 CSS 变量自定义 Prism.js 的主题
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`unplugin-vue-i18n`](https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n) - Vue I18n 的 Vite 插件
- [`vite-ssg-sitemap`](https://github.com/jbaubree/vite-ssg-sitemap) - 站点地图生成器
- [`vite-plugin-vue-devtools`](https://github.com/webfansplz/vite-plugin-vue-devtools) - 旨在增强Vue开发者体验的Vite插件


### 克隆到本地

如果您更喜欢使用更干净的 git 历史记录手动执行此操作

```bash
npx degit xxggg/xgvitevue my-app
cd my-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `vite.config.ts` 更改主机名
- [ ] 在 `public` 目录下改变favicon
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
pnpm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
