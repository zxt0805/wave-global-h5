/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-10-11 15:42:15
 * @FilePath: /wave-chinese-website/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Home

function Home() {
  let pageModel = new PageModel('HOME', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <>
      <div className="hidden">
        <img alt="logo" src="/assets/image/logo.png" />
      </div>
      Hello Wave
    </>
  )
}
