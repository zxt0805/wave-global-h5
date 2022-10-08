/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 15:46:19
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 11:15:43
 * @FilePath: /wave-global-h5/src/components/index/title.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

export default HeadImg

function HeadImg(props) {
  useEffect(() => {
  }, [])


  return (
    <div className="head-img">
        <img
          className="rounded-xl"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5453005f74be2.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667024522&t=261ed7cc222e220fdfff3d24cc118eb7"
          alt=""
        />
        <div className="time-onimg">Start at 08.26 10:00</div>
        <div className="status-onimg">Start</div>
      </div>
  )
}
