/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-05-05 20:58:52
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 11:23:53
 * @FilePath: /wave-website/src/components/footer.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Head from 'next/head'
import Link from 'next/link'

export default Footer

function Footer() {
  const aLinkIcon = ['https://t.me/wave_universe', 'https://twitter.com/wave_universe', 'https://discord.gg/dUEcZRecTa']
  return (
    <>
      {/* <div className={'footer-aLink'}>
        <div className={'footer-icon container'}>
          {aLinkIcon.map((item, index) => {
            return (
              <Link key={index} href={item}>
                <a target="_blank"></a>
              </Link>
            )
          })}
        </div>
      </div> */}
      <footer className={'footer'}>
        <div>
          <div className={'footer-wave'}>
            <Link href="https://beian.miit.gov.cn/">
              <a target="_blank">© 2021-2022 waveplatform.com.cn 版权所有 京ICP备2022027930号-3</a>
            </Link>
          </div>
          <div className={'footer-a'}>
            <Link href="/privacy" passHref>
              隐私协议
            </Link>
            <Link href="/terms" passHref>
              服务条款
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
