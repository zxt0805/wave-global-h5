/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 15:36:00
 * @FilePath: /wave-chinese-website/src/pages/terms.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import TermsConditions from 'components/termsConditions'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Terms

function Terms() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', 'footer-no-margin')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <>
      <TermsConditions />
    </>
  )
}
