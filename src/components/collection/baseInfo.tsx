/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-08 21:02:11
 * @FilePath: /wave-chinese-website/src/components/index/baseInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default BaseInfo

function BaseInfo(props) {
  let { collectionInfo } = props
  const [day, setDay] = useState(0)
  const [hrs, setHrs] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  let countDown = collectionInfo.sell_start_time

  useEffect(() => {
    countDownInterval()
  }, [])

  function calculate() {
    setDay(Math.floor(countDown / 86400) || 0)
    let remainS = countDown % 86400
    setHrs(Math.floor(remainS / 3600) || 0)
    remainS = remainS % 3600
    setMin(Math.floor(remainS / 60) || 0)
    setSec(remainS % 60)
  }

  function countDownInterval() {
    setInterval(() => {
      countDown--
      calculate()
    }, 1000)
  }

  return (
    <div className="baseinfo-wrap">
      <p className="title">
        {collectionInfo.name}
        <span className="icon">EVT</span>
      </p>
      <div className="nums">
        <div className="nums-item">
          <span className="tip">Remaining</span>
          <span className="number">{collectionInfo.box_total - collectionInfo.sold_quantity}</span>
        </div>
        <div className="nums-item">
          <span className="tip">total</span>
          <span className="number">{collectionInfo.box_total}</span>
        </div>
      </div>
      {/* <div className="count-down">
          <div className="time-item">
            <p className="time">{day}</p>
            <p className="unit">Day</p>
          </div>
          <div className="time-divide">:</div>
          <div className="time-item">
            <p className="time">{hrs}</p>
            <p className="unit">Hrs</p>
          </div>
          <div className="time-divide">:</div>
          <div className="time-item">
            <p className="time">{min}</p>
            <p className="unit">Min</p>
          </div>
          <div className="time-divide">:</div>
          <div className="time-item">
            <p className="time">{sec}</p>
            <p className="unit">Sec</p>
          </div>
        </div> */}
    </div>
  )
}
