/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 21:45:50
 * @FilePath: /wave-global-h5/src/components/index/title.tsx
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 20:54:29
 * @FilePath: /wave-chinese-website/src/components/index/staticInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react'

export default StaticInfo

function StaticInfo(props) {
  console.log(props)
  return (
    <div className="staticinfo-wrap">
      <p className="title">Introduction</p>
      <div className="content-wrap">
        <p className="content">{props.collectionInfo.description}</p>
        <p className="more">More</p>
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
              <p className="item">
                <p>{props.collectionInfo.specifications.contract_address}</p>
                <img src="/assets/image/icon-copy.png" alt="" className="icon-copy" />
              </p>
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
            <p>
              EVT(Encrypted Variable Token) is a new kind of token type that we can use to replace NFT in metaverse and
              physical world
            </p>
            <p className="more">More</p>
          </div>
        </div>
      )}
    </div>
  )
}
