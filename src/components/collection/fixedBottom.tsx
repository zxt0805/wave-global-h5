/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 16:09:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-09 16:55:21
 * @FilePath: /wave-global-h5/src/components/index/fixBottom.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React, { useEffect, useState } from 'react'

import { t } from "i18next"

export default fixedBottom

function fixedBottom(props) {
  const { addToCalendar, payOrder, gotoTrade, collectionInfo } = props
  console.log(collectionInfo)

  function saleStatusChange() {
    console.log(collectionInfo)
    if (collectionInfo.sell_status == 0) {
      // TODO: 加入日历状态判断按钮展示
      // 未加
      return (
        <div className="fixBottom">
          <div className="statusInfo">{collectionInfo.sell_price}NEW</div>
          <div className="button" onClick={addToCalendar}>
            {t('ADDTOCALENDAR')}
          </div>
        </div>
      )
      // 已加
      return (
        <div className="fixBottom">
          <div className="statusInfo">{collectionInfo.sell_price}NEW</div>
          <div className="button button-disable">{t('ADDEDTOCALENDAR')}</div>
        </div>
      )
    } else {
      if (collectionInfo.box_total == collectionInfo.sold_quantity) {
        return (
          <div className="fixBottom">
            <div className="statusInfo end">{collectionInfo.sell_price}NEW</div>
            <div className="button" onClick={gotoTrade}>
              {props.collectionInfo.is_boughtGo ? t('CHECKMYASSETS') : t('GOTOTRADE')}
            </div>
          </div>
        )
      } else {
        return (
          <div className="fixBottom">
            <div className="statusInfo">{collectionInfo.sell_price}NEW</div>
            <div className="button" onClick={payOrder}>
              {t('BUY')}
            </div>
          </div>
        )
      }
    }
  }

  // return saleStatusChange()
  return (
    <div className="fixBottom flex-col">
      {saleStatusChange()}
    </div>
  )
}
