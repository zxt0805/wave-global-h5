/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-09 11:16:28
 * @FilePath: /wave-global-h5/src/components/index/title.tsx
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 20:54:29
 * @FilePath: /wave-chinese-website/src/components/index/staticInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default StaticInfo

function StaticInfo(props) {
  const [showAllIntro, setShowAllIntro] = useState(false)
  const [showAllTips, setShowAllTips] = useState(false)

  function changeShowAllIntro() {
    setShowAllIntro(!showAllIntro)
  }
  function changeShowAllTips() {
    setShowAllTips(!showAllTips)
  }
  return (
    <div className="staticinfo-wrap">
      <p className="title">Introduction</p>
      <div className="content-wrap">
        <p className={showAllIntro ? '' : 'h-10 text-gray666 line-clamp-2'}>{props.collectionInfo.description}</p>
        <p className="more" onClick={changeShowAllIntro}>
          {showAllIntro ? '收起' : 'More'}
        </p>
      </div>
      <p className="title">Specifications</p>
      {props.collectionInfo.specifications && (
        <div className="spec-info">
          <div className="flex">
            <div className="info-title">
              <p className="item">Contract Address</p>
              <p className="item">Token Standard</p>
              <p className="item">Blockchain</p>
              <p className="item">Creator Earnings</p>
            </div>
            <div className="info-content">
              <div className="item">
                <p>{props.collectionInfo.specifications.contract_address}</p>
                <img src="/assets/image/icon-copy.png" alt="" className="icon-copy" />
              </div>
              <p className="item">{props.collectionInfo.specifications.token_standard}</p>
              <p className="item">{props.collectionInfo.specifications.block_chain}</p>
              <p className="item">
                {props.collectionInfo.specifications.creator_earnings}
                <img src="/assets/image/icon-ques.png" alt="" className="icon-ques" />
              </p>
            </div>
          </div>
          <div className="spec-tip">
            <img src="/assets/image/icon-point.png" alt="" className="icon-point" />
            <p className={showAllTips ? '' : 'h-8 line-clamp-2'}>
              EVT(Encrypted Variable Token) is a new kind of token type that we can use to replace NFT in metaverse and
              physical world
            </p>
            <p className="more" onClick={changeShowAllTips}>
              {showAllTips ? '收起' : 'More'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
