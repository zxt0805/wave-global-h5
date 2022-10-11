/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-10-09 15:31:28
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-09 20:58:11
 * @FilePath: /wave-chinese-website/src/react-i18next/i18n.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from './locales/resources'

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: { zh: ['zh'], default: ['en'] },
  lng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})

export default i18n
