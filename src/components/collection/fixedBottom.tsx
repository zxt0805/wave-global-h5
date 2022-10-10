/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 16:09:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-10 17:17:54
 * @FilePath: /wave-global-h5/src/components/index/fixBottom.tsx
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-09 17:02:42
 * @FilePath: /wave-chinese-website/src/components/collection/fixedBottom.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import React, { useEffect, useState } from 'react'

import { t } from 'i18next'

export default fixedBottom

function fixedBottom(props) {
  const { addToCalendar, payOrder, gotoTrade, gotoAssets, collectionInfo } = props
  function saleStatusChange() {
    if (collectionInfo.sell_status == 0) {
      // TODO: 加入日历状态判断按钮展示
      // 未加
      return (
        <div className="fixBottom">
          <div className="statusInfo">{collectionInfo.sell_price}NEW</div>
          <div className={collectionInfo.sell_start_time - collectionInfo.system_time < 600 ? 'button' : 'button button-disable'} onClick={addToCalendar}>
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
    } else if(collectionInfo.sell_status == 1){
      return (
        <div className="fixBottom">
          <div className="statusInfo">{collectionInfo.sell_price}NEW</div>
          <div className="button" onClick={payOrder}>
            {t('BUY')}
          </div>
        </div>
      )
    } else if(collectionInfo.sell_status == 2) {
      return (
        <div className="fixBottom">
          <div className="statusInfo end">{collectionInfo.sell_price}NEW</div>
          <div className="button" onClick={props.collectionInfo.is_boughtGo ? gotoAssets : gotoTrade}>
            {props.collectionInfo.is_boughtGo ? t('CHECKMYASSETS') : t('GOTOTRADE')}
          </div>
        </div>
      )
    }
  }

  // return saleStatusChange()
  return <div className="fixBottom flex-col">{saleStatusChange()}</div>
}
