import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import Inspect  from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  // server: {
  //   host: 'localhost', // 指定服务器主机名
  //   port: 8880, // 指定服务器端口
  //   hmr: true,  // 开启热更新
  //   open: true, // 在服务器启动时自动在浏览器中打开应用程序
  //   https: false // 是否开启 https
  // },
  resolve: {
    alias: {
      // 相对路径别名配置，使用 @ 代替 src
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // 配置别名 方式二
      // "@": path.resolve("./src")
    },
  },
  // 配置scss全局变量
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "./src/styles/variable.scss";', //后面的`;`不要忘记，不然会报错**!
      },
    },
  },
})

// Network: use --host to expose
// 没有将网络服务暴露在网络中 所以 无法使用 IP 地址访问
// 解决方案：package.json中启动命令配置本地IP地址  "scripts": {"dev": "dev": "vite --host 0.0.0.0",……}
// vite (vue3)配置内网 ip 访问 方法
// 如果没有进行配置，运行项目之后，看到的访问地址是本地访问地址，其他人访问不了。
// 如果想要其他人也可以访问，需要设置内网 ip 访问地址，设置方法如下：
// 一、配置 “ vite.config.ts ” 文件
// 在项目根目录下的 “ vite.config.ts ” 文件 中，添加 serve 配置 “host: ‘0.0.0.0’ ”
// 二、配置 “ package.json ” 文件
// 在 “ package.json ” 文件中，修改 “ dev ” 配置，添加 “ --host 0.0.0.0”

// -- host
// 以下方式 二选一 即可
// // vite.config.(ts | js) 文件中 配置 如果采取这种方式配置的话 不需要再 package.json 中 再次配置
// server: {
//  host: '0.0.0.0' // 开启服务器地址
// }
// // package.json 中 配置 需要 用到 命令行 如果采取这种方式配置的话 不需要再 vite.config.(ts | js) 文件中 再次配置
// "scripts": {
// "dev": "vite --host 0.0.0.0",
// },

// -- port: 8888, //端口改为8888,vite 默认端口 5173
// 以下方式 二选一 即可
// // vite.config.(ts | js) 文件中 配置 如果采取这种方式配置的话 不需要再 package.json 中 再次配置
// server: {
//  port: 8888, //端口改为8888,vite 默认端口 5173
//  	 host: '0.0.0.0' // 开启服务器地址
// 	}
// 	// package.json 中 配置 需要 用到 命令行 如果采取这种方式配置的话 不需要再 vite.config.(ts | js) 文件中 再次配置
// 	"scripts": {
//   "dev": "vite --port 8888",
// },

// --open  浏览器自动打开
// 以下方式 二选一 即可:
// 我们只需要在 vite.config.(ts | js) 文件中 配置
//   server: {
//   //服务
//   port: 8888, //端口改为8888,vite 默认端口 5173
//   host: '0.0.0.0', // 服务器 地址
//   open: true,//启动完成时 自动打开  浏览器
// },
// 在 package.json 中配置
// "scripts": {
//     "dev": "vite --open",
//   },
