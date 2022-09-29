import React from 'react'
import PrivacyPolicy from 'components/privacyPolicy'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Privacy

function Privacy() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', 'footer-no-margin')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <>
      <PrivacyPolicy />
    </>
  )
}
