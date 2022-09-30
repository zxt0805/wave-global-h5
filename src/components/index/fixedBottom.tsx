/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 16:09:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-09-29 18:03:46
 * @FilePath: /wave-global-h5/src/components/index/fixBottom.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default fixedBottom

function fixedBottom(props) {
  const { saleStatus, addToCalendar, payOrder, gotoTrade } = props
  useEffect(() => { }, [])

  function saleStatusChange() {
    // console.log(propssaleStatus)
    if (saleStatus == 'saling') {
      return (
        <div className='fixBottom'>
          <div className="statusInfo">1000NEW</div>
          <div className="button" onClick={payOrder}>
            Buy
          </div>
        </div>
      )
    } else if (saleStatus == 'preSale') {
      return (
        <div className='fixBottom'>
          <div className="statusInfo">1000NEW</div>
          <div className="button" onClick={addToCalendar}>
            add to calendar
          </div>
        </div>
      )
    } else {
      return (
        <div className='fixBottom'>
          <div className="statusInfo">ended</div>
          <div className="button" onClick={gotoTrade}>
            GOTO Trade
          </div>
        </div>
      )
    }
  }

  // return saleStatusChange()
  return (<div className="fixBottom flex-col"><div className="w-full flex items-center justify-between">
    <div className="statusInfo">1000NEW</div>
    <div className="button" onClick={payOrder}>
      Buy
    </div>
  </div>
    <div className="w-full flex items-center justify-between">
      <div className="statusInfo">1000NEW</div>
      <div className="button" onClick={addToCalendar}>
        add to calendar
      </div>
    </div>

    <div className="w-full flex items-center justify-between">
      <div className="statusInfo">ended</div>
      <div className="button" onClick={gotoTrade}>
        GOTO Trade
      </div>
    </div></div>)
}
