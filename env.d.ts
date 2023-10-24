/*
 * @Author: jin.zhong jin.zhong@qizhidao.com
 * @Date: 2023-05-22 09:14:04
 * @LastEditors: jin.zhong jin.zhong@qizhidao.com
 * @LastEditTime: 2023-07-03 11:11:39
 * @FilePath: \qzd-m-main\env.d.ts
 * @Description:
 */
/// <reference types="vite/client" />
import { AppConfig } from 'nuxt/schema'
declare module '@nuxt/schema' {
  interface AppConfig {
    title: string
    armsPid: string
    theme?: any
  }
}
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  /** H5 登录页面 */
  readonly VITE_APP_SSO: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {}
