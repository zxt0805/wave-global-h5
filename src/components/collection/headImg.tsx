/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-10 17:04:54
 * @FilePath: /wave-chinese-website/src/components/collection/headImg.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

// import { useTranslation } from "react-i18next";
import { t } from 'i18next'

export default HeadImg

function HeadImg(props) {
  let { collectionInfo } = props

  const [remainSecond, setRemainSecond] = useState(0)
  let timer, remainTime

  useEffect(() => {
    remainTime = collectionInfo.sell_start_time - collectionInfo.system_time
    setRemainSecond(remainTime)
    if (collectionInfo.sell_status == 0 && remainTime <= 86400) {
      if (timer) {
        clearInterval(timer)
      }
      console.log('useEffect')
      countDown()
    }
  },[])

  function countDown() {
    timer = setInterval(() => {
      remainTime = remainTime - 1
      setRemainSecond(remainTime)
    }, 1000)
  }

  function calculateCountdown(remain) {
    let hrs = Math.floor(remain / 3600) || 0
    remain = remain % 3600
    let min = Math.floor(remain / 60) || 0,
      sec = remain % 60
    return `${fillZero(hrs)}:${fillZero(min)}:${fillZero(sec)}`
  }

  function statusJudge() {
    if (collectionInfo.sell_status == 0) {
      return <div className="status-onimg">{t('UPCOMMINGDROP')}</div>
    } else {
      if (collectionInfo.box_total == collectionInfo.sold_quantity) {
        return <div className="status-onimg disabled">{t('SOLDOUT')}</div>
      } else {
        return <div className="status-onimg">{t('LIVEDROP')}</div>
      }
    }
  }

  function timeJudge() {
    if (collectionInfo.sell_status == 0) {
      if (remainSecond > 86400) {
        return <div className="time-onimg">{t('STARTSAT') + ' ' + getTimeStr(collectionInfo.sell_start_time)}</div>
      } else {
        return <div className="time-onimg">{t('STARTSIN') + ' ' + calculateCountdown(remainSecond)}</div>
      }
    } else {
      return <div className="time-onimg">{t('REVEALSAT') + ' ' + getTimeStr(collectionInfo.reveals_time)}</div>
    }
  }

  function getTimeStr(timestamp) {
    console.log(timestamp)
    let time = new Date(timestamp * 1000),
      timeZone = (time.getTimezoneOffset()) * (-1) / 60
    return `${fillZero(time.getMonth() + 1)}.${fillZero(time.getDate())} ${fillZero(time.getHours())}:${fillZero(
      time.getMinutes()
    )}:${fillZero(time.getSeconds())}(UTC${timeZone > 0 ? '+' + timeZone : timeZone})`
  }

  function fillZero(num) {
    return Number(num) > 9 ? num.toString() : '0' + num.toString()
  }

  return (
    <div className="head-img">
      <img className="rounded-xl" src={collectionInfo.image} alt="" />
      {timeJudge()}
      {statusJudge()}
    </div>
  )
}
