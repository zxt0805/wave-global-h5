/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 11:46:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-09 16:00:19
 * @FilePath: /wave-global-h5/src/pages/_app.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import 'styles/style.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import 'react-i18next/i18n'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider defaultTheme="system" attribute="class">
    // <ThemeProvider defaultTheme="light" attribute="class">
    <Component {...pageProps} />
    // </ThemeProvider>
  )
}
export default MyApp
