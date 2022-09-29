/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 15:22:00
 * @FilePath: /wave-chinese-website/src/components/banner.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { getRequest } from '../utils/axiosData'

export default Banner

function Banner() {
  const [codeLink, setCodeLink] = useState('')
  const codeUrl = '/api/version'
  useEffect(() => {
    const fetchCode = async () => {
      const res = await getRequest(codeUrl)
      if (res.data.data !== '') {
        setCodeLink(res.data.data.android.download_url)
      }
    }
    fetchCode()
  }, [])

  return (
    <div className={'banner container'}>
      <img className={'banner-bg'} src="/assets/image/banner-bg.png" alt="banner-bg" />
      <div className={'content'}>
        <div className={'title'}>
          {/* THE WEB3 PLATFORM */}浪潮web3平台
          <br />
          {/* OF GLOBAL DIGITAL */}
          <br />
          {/* ENTERTAINMENT */}
        </div>
        <p>
          {/* With innovative blockchain technology, digital assets such as film and television series and collectibles are
          integrated to provide users with a one-stop experience of trading, distribution and entertainment. */}
          通过创新的区块链技术，影视剧和收藏品等数字资产被整合起来，为用户提供一站式的交易、分销和娱乐体验。
          集成，为用户提供交易、发行和娱乐的一站式体验。
        </p>
        <div className={'content-alink-box'}>
          <div className={'content-alink'}>
            {/* <a href="https://apps.apple.com/us/app/wave-nft-browser/id1626787987" className={'store'}>
              <img src="/assets/image/app-store.png" alt="appStore" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.wave" className={'play'}>
              <img src="/assets/image/google-play.png" alt="googlePlay" />
            </a> */}
            {/* <span className={'code'}>
              <img src="/assets/image/code.png" alt="code" />
              <div className={'code-tit'}>
                <QRCode value={codeLink} size={94} />
              </div>
            </span> */}
          </div>
        </div>
      </div>
      <p className={'img'}>
        <img className={'img-pc'} src="/assets/image/banner.png" alt="banner" />
        <img className={'img-h5'} src="/assets/image/banner-h5.png" alt="banner" />
      </p>
    </div>
  )
}
