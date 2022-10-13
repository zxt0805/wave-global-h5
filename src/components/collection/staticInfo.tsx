/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-12 11:45:02
 * @FilePath: /wave-chinese-website/src/components/collection/staticInfo.tsx
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 20:54:29
 * @FilePath: /wave-chinese-website/src/components/index/staticInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import { t } from 'i18next'
import copy from 'copy-to-clipboard'

import { message } from 'antd'

export default StaticInfo

function StaticInfo(props) {
  const [showAllIntro, setShowAllIntro] = useState(false)
  const [isShowBubble, setIsShowBubble] = useState(false)

  function changeShowAllIntro() {
    setShowAllIntro(!showAllIntro)
  }
  function checkMore() {
    window.open('https://www.newtonproject.org/en/evt/')
  }
  function copyAddress(str) {
    copy(str)
    message.success(t('COPYSUCCESS'))
  }
  function showBubble(val, event) {
    event = event || window.event
    if (val) {
      event.stopPropagation()
    }
    setIsShowBubble(val)
  }
  return (
    <div className="staticinfo-wrap" onClick={e => showBubble(false, e)}>
      <p className="title introduction">{t('INTRODUCTION')}</p>
      <div className="content-wrap">
        <p className={showAllIntro ? '' : 'h-[3rem] text-gray666 line-clamp-2'}>{props.collectionInfo.description}</p>
        <p className="more" onClick={changeShowAllIntro}>
          {showAllIntro ? t('COLLAPSE') : t('MORE')}
        </p>
      </div>
      <p className="title">{t('SPECIFICATTIONS')}</p>
      {props.collectionInfo.specifications && (
        <div className="spec-info">
          <div className="flex">
            <div className="info-title">
              <p className="item">{t('CONTRACTADDRESS')}</p>
              <p className="item">{t('TOKENSTANDARD')}</p>
              <p className="item">{t('BLOCKCHAIN')}</p>
              <p className="item">{t('CREATOREARNINGS')}</p>
            </div>
            <div className="info-content">
              <div className="item">
                <p className="needTruncate">{props.collectionInfo.specifications.contract_address}</p>
                <img
                  src="/assets/image/icon-copy.png"
                  alt=""
                  className="icon-copy"
                  onClick={() => copyAddress(props.collectionInfo.specifications.contract_address)}
                />
                {/* onClick={copyAddress(props.collectionInfo.specifications.contract_address)} */}
              </div>
              <p className="item">{props.collectionInfo.specifications.token_standard}</p>
              <p className="item">{props.collectionInfo.specifications.block_chain}</p>
              <div className="item">
                {props.collectionInfo.specifications.creator_earnings}
                <img
                  src="/assets/image/icon-ques.png"
                  alt=""
                  className="icon-ques"
                  onClick={e => showBubble(true, e)}
                />
                {/* onClick={showBubble(true)} */}
                {isShowBubble && (
                  <div className="bubble">
                    <img src="/assets/image/bubble.png" alt="" />
                    <p className="bubble-content">
                      {t('BUBBLEBEFORE') +
                        ' ' +
                        props.collectionInfo.specifications.creator_earnings +
                        ' ' +
                        t('BUBBLEAFTER')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="spec-tip">
            <img src="/assets/image/icon-point.png" alt="" className="icon-point" />
            {/* className={showAllTips ? '' : 'h-8 line-clamp-2'} */}
            <p>
              {t('TIPS')}
              <a className="more" href="https://www.newtonproject.org/en/evt/">
                {t('MORE')}
              </a>
            </p>
            {/* <p className="more" onClick={changeShowAllTips}>
              {showAllTips ? t('COLLAPSE') : t('MORE')}
            </p> */}
          </div>
        </div>
      )}
    </div>
  )
}
