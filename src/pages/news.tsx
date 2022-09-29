/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 11:38:25
 * @FilePath: /wave-chinese-website/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Banner from 'components/banner'
import About from 'components/about'
import Roadmap from 'components/roadmap'
import RoadmapMobile from 'components/roadmapMobile'
import Features from 'components/features'
// import Community from 'components/community'
import Faq from 'components/faq'
import Down from 'components/down'
// import MobileFeaturetab from 'components/mobilefeaturestab'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Home

function Home() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <>
      {/* <Banner /> */}
      <About />
      {/* <Features />
      <Roadmap />
      <RoadmapMobile />
      <Faq />
      <Down /> */}
    </>
  )
}
