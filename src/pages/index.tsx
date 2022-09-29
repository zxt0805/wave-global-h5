/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-09-29 16:13:38
 * @FilePath: /wave-chinese-website/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Title from 'components/index/title'
import FixBottom from 'components/index/fixBottom'

import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Home

function Home() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  return (
    <div className={'index-wrap p-2 bg-gray-300'}>
      <img className={'rounded-xl'} src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5453005f74be2.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667024522&t=261ed7cc222e220fdfff3d24cc118eb7" alt="" />
      <Title />
      <FixBottom />
    </div>
      /* <About /> */
      /* <Features />
      <Roadmap />
      <RoadmapMobile />
      <Faq />
      <Down /> */
  )
}
