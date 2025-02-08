// uno.config.ts
import { 
  defineConfig, 
  presetUno, 
  presetAttributify, 
  presetIcons 
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-pink-400 text-white cursor-pointer !outline-none hover:bg-pink-500 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:opacity-100'],
  ],
});