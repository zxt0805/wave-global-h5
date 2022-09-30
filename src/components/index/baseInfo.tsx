/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-09-30 15:52:08
 * @FilePath: /wave-global-h5/src/components/index/title.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default BaseInfo

function BaseInfo(props) {
  let { countDown } = props
  const [day, setDay] = useState(0)
  const [hrs, setHrs] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

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
      <div>
        <p className="title">
          Victory<span className="icon">EVT</span>
        </p>
        <p className="time">Starts In: August 28</p>
        <div className="count-down">
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
        </div>
        <div className="progress">
          <div className="num">
            <span>375</span>/1000
          </div>
          <p className="tip">Remaining/Total Supp</p>
          <div className="bar">
            <div className="remain">
              <div className="num-tip">376</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
