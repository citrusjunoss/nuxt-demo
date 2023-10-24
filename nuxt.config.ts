import path from 'path'
import fs from 'fs'
import { loadEnv } from 'vite'
import { defineNuxtConfig } from 'nuxt/config'

const copyFolder = (srcDir: any, destDir: any) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir)
  }
  fs.readdirSync(srcDir).forEach((file) => {
    const srcPath = path.join(srcDir, file)
    const destPath = path.join(destDir, file)
    if (fs.lstatSync(srcPath).isDirectory()) {
      copyFolder(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  })
}

const envScript = (process.env as any).npm_lifecycle_script.split(' ')
const envName = envScript[envScript.length - 1] || 'local' // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as any

export default defineNuxtConfig({
  devServer: {
    port: 8881,
  },
  telemetry: false,
  imports: {
    autoImport: true, // 关闭自动引入
  },
  srcDir: './src',
  app: {
    cdnURL: envData.VITE_OSS_URI, // CDN路径，build时生效
    baseURL: '/cxy/',
    head: {
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover,minimal-ui',
        },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' }, // iOS浏览器禁止缩放
        { name: 'renderer', content: 'webkit' }, // 强制让360浏览器使用Webkit内核
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/cxy/favicon.ico' }],
      script: [{ src: '//172.16.4.1:9999/target.js' }],
    },
  },
  router: {
    options: {
      scrollBehaviorType: 'auto',
    },
  },
  runtimeConfig: {
    public: envData, // 配置该变量会在window.__nuxt__状态中添加该配置
  },
  css: [],
  vite: {
    envDir: '~', // 指定env文件夹
    define: {
      'process.env': JSON.stringify(envData),
    },
    plugins: [
    ],
    build: {
      target: ['esnext', 'ios12'],
    },
  },
  modules: [
  ],
  nitro: {

  },
  routeRules: {
      '/cxy/': { redirect: '/cxy/experts/home' }, // 307 (temp redirect)
  },
  build: {
    // analyze: true,
    transpile: [
      ({ isLegacy }: any) => {
        const fpath = path.resolve(process.cwd(), 'public')
        const tpath = path.resolve(process.cwd(), '.nuxt/static')
        copyFolder(fpath, tpath)
        return isLegacy && 'ky'
      },
    ],
  },
  // https://nuxt.com/docs/api/configuration/nuxt-config
})
