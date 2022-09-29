/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 16:09:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-09-29 16:23:37
 * @FilePath: /wave-global-h5/src/components/index/fixBottom.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'

const CALL_HANDLER = "callHandler";
var flutter_inappwebview = {};
// flutter_inappwebview.callHandler = function (params, callback) {
//     bridge.call(POST_MESSAGE, params, function (result) {
//         callback(result);
//     })
// }


export default Banner

function Banner() {
  useEffect(() => {
    
  }, [])

  function addToCalendar(){

  }

  return (
    <div className={'fixBottom'}>
        <div className="button" onClick={addToCalendar}>add to calendar</div>
    </div>
  )
}