/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 16:09:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-11 14:31:03
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
  const { addToCalendar, payOrder, gotoTrade, gotoAssets, collectionInfo, hasAddCalendar, isInApp } = props

  function textStatus(){
    if(collectionInfo.sell_status == 2){
      return (<div className="statusInfo end">{collectionInfo.sell_price}NEW</div>)
    } else {
      return (<div className="statusInfo">{collectionInfo.sell_price}NEW</div>)
    }
  }
  function buttonStatus(){
    if(isInApp){
    if (collectionInfo.sell_status == 0) {
      if(hasAddCalendar){
        return (<div className="button button-disable">{t('ADDEDTOCALENDAR')}</div>)
      } else {
        return (<div className={collectionInfo.sell_start_time - collectionInfo.system_time < 600 ? 'button button-disable' : 'button'} onClick={collectionInfo.sell_start_time - collectionInfo.system_time < 600 ? (() => {}) : addToCalendar}>
          {t('ADDTOCALENDAR')}
        </div>)
      }
    } else if(collectionInfo.sell_status == 1){
      return (<div className="button" onClick={payOrder}>{t('BUY')}</div>)
    } else if(collectionInfo.sell_status == 2) {
      return (<div className="button" onClick={props.collectionInfo.is_boughtGo ? gotoAssets : gotoTrade}>
            {props.collectionInfo.is_boughtGo ? t('CHECKMYASSETS') : t('GOTOTRADE')}
          </div>)
    }
    } else {
      return (<div className="button" onClick={gotoDownLoad}>{t('DOWNLOAD')}</div>)
    }
  }

  function gotoDownLoad(){
    window.open('https://app.waveuniverse.org')
  }

  // return saleStatusChange()
  return <div className="fixBottom">{textStatus()}{buttonStatus()}</div>
}
