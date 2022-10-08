/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 15:37:37
 * @FilePath: /wave-global-h5/src/components/index/title.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default StaticInfo

function StaticInfo(props) {
  useEffect(() => {
  }, [])

  return (
    <div className="staticinfo-wrap">
      <p className="title">Introduction</p>
      <p className="content">Remembering 1950 is a documentary film about Volunteer Army. The film visited more than 2</p>
      <p className="title">Specifications</p>
      <div className="spec-info">
        <div className="info-title">
          <p>Contract Address</p>
          <p>Token Standard</p>
          <p>Blockchain</p>
          <p>Blockchain</p>
        </div>
        <div className="info-content">
          <p>NEW844...saQM<img src="/assets/image/icon-copy.png" alt="" className="icon-copy"/></p>
          <p>EVT (NRC-53)</p>
          <p>Newton</p>
          <p>5%<img src="/assets/image/icon-ques.png" alt="" className="icon-ques"/></p>
        </div>
        <div className="spec-tip"><img src="/assets/image/icon-point.png" alt="" className="icon-point" />EVT(Encrypted Variable Token) is a new kind of token type that we can use to replace NFT in metaverse and physical world</div>
      </div>
      
    </div>
  )
}
