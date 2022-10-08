/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 20:54:29
 * @FilePath: /wave-chinese-website/src/components/index/staticInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react'

export default StaticInfo

function StaticInfo(props) {
  return (
    <div className="staticinfo-wrap">
      <p className="title">Introduction</p>
      <p className="content">{props.collectionInfo.description}</p>
      <p className="title">Specifications</p>
      <div className="spec-info">
        <div className="info-title">
          <p>Contract Address</p>
          <p>Token Standard</p>
          <p>Blockchain</p>
          <p>Creator Earnings</p>
        </div>
        <div className="info-content">
          <p>{props.collectionInfo.specifications.contract_address}<img src="/assets/image/icon-copy.png" alt="" className="icon-copy"/></p>
          <p>{props.collectionInfo.specifications.token_standard}</p>
          <p>{props.collectionInfo.specifications.block_chain}</p>
          <p>{props.collectionInfo.specifications.creator_earnings}<img src="/assets/image/icon-ques.png" alt="" className="icon-ques"/></p>
        </div>
        <div className="spec-tip"><img src="/assets/image/icon-point.png" alt="" className="icon-point" />EVT(Encrypted Variable Token) is a new kind of token type that we can use to replace NFT in metaverse and physical world</div>
      </div>
      
    </div>
  )

}
