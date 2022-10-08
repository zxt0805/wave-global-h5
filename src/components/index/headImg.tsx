/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 21:23:28
 * @FilePath: /wave-chinese-website/src/components/index/headImg.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default HeadImg

function HeadImg(props) {
  console.log(props);
  return (
    <div className="head-img">
        <img
          className="rounded-xl"
          src={props.collectionInfo.image}
          alt=""
        />
        <div className="time-onimg">Start at 08.26 10:00</div>
        <div className="status-onimg">{props.collectionInfo.sell_status == 0 ? 'Upcomming drop' : 'Live drop'}</div>
        {/* 'Upcomming drop' : 'Live drop' : 'Sold out' */}
      </div>
  )
}
