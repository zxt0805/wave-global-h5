/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-09 11:50:23
 * @FilePath: /wave-chinese-website/src/components/collection/headImg.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default HeadImg

function HeadImg(props) {
  let { collectionInfo } = props

  const [countDownSecond, setCountDownSecond] = useState(0)
  const [needCountDown, setNeedCountDown] = useState(false)

  useEffect(() => {
    let deltaTime = collectionInfo.sell_start_time - collectionInfo.system_time
    if (deltaTime > 86400) {
      // show start in components
      setNeedCountDown(false)
    } else if (deltaTime < 86400 && deltaTime > 0) {
      // show countDown components
      setNeedCountDown(true)
      setCountDownSecond(deltaTime)
      countDown(deltaTime)
    } else {
      // show sold components
      setNeedCountDown(false)
    }
  }, [0])

  function countDown(time) {
    setInterval(() => {
      time = time - 1
      setCountDownSecond(time)
    }, 1000)
  }

  function statusJudge() {
    if (collectionInfo.sell_status == 0) {
      return <div className="status-onimg">Upcomming drop</div>
    } else {
      if (collectionInfo.box_total == collectionInfo.sold_quantity) {
        return <div className="status-onimg disabled">Sold out</div>
      } else {
        return <div className="status-onimg">Live drop</div>
      }
    }
  }

  function timeJudge() {
    if (collectionInfo.sell_status == 1) {
      // TODO: 缺少当前时间戳字段判断展示倒计时/发售时间
      // if (seconds > 86400) {
      //   return <div className="time-onimg">Start at {getTimeStr(collectionInfo.sell_start_time)}</div>
      // } else {
      // return <div className="time-onimg">Start in {new Date(collectionInfo.sell_start_time * 1000).toLocaleString()}</div>
      return <div className="time-onimg">Start in {getTimeStr(countDownSecond)}</div>

      // }
    } else {
      return <div className="time-onimg">Reveals at {getTimeStr(collectionInfo.reveals_time)}</div>
    }
  }

  function getTimeStr(timestamp) {
    let time = new Date(timestamp * 1000),
      timeZone = time.getTimezoneOffset() / 60
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
