/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-09 11:21:41
 * @FilePath: /wave-chinese-website/src/components/index/headImg.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default HeadImg

function HeadImg(props) {
  const [seconds, setSeconds] = useState(0);

  let { collectionInfo } = props
  let nowTime = Math.floor(new Date().getTime() / 1000);
  // seconds = collectionInfo.sell_start_time - collectionInfo.system_time // *** 替换为开始时间 - 当前时间
  // setSeconds(nowTime - collectionInfo.sell_start_time)

  // const [day, setDay] = useState(0)
  // const [hrs, setHrs] = useState(0)
  // const [min, setMin] = useState(0)
  // const [sec, setSec] = useState(0)
  // let countDown = collectionInfo.collectionInfo.system_time - collectionInfo.sell_start_time
  // function calculate() {
  //   setDay(Math.floor(countDown / 86400) || 0)
  //   let remainS = countDown % 86400
  //   setHrs(Math.floor(remainS / 3600) || 0)
  //   remainS = remainS % 3600
  //   setMin(Math.floor(remainS / 60) || 0)
  //   setSec(remainS % 60)
  // }

  // function countDownInterval() {
  //   setInterval(() => {
  //     countDown--
  //     calculate()
  //   }, 1000)
  // }

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
        return <div className="time-onimg">Start in {seconds}</div>
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
    )}(UTC${timeZone > 0 ? '+' + timeZone : timeZone})`
  }

  function fillZero(num) {
    return Number(num) > 9 ? num.toString() : '0' + num.toString()
  }

  // function countDown(){
  //   setInterval(() => {
  //     console.log(seconds)
  //     seconds --
  //   },1000)
  // }
  return (
    <div className="head-img">
      <img className="rounded-xl" src={collectionInfo.image} alt="" />
      {timeJudge()}
      {statusJudge()}
    </div>
  )
}
