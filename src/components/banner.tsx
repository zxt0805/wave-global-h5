/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-09-29 11:57:05
 * @FilePath: /wave-chinese-website/src/components/banner.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode.react'
import { getRequest } from '../utils/axiosData'

export default Banner

function Banner() {
  const [codeLink, setCodeLink] = useState('')
  const codeUrl = '/api/version'
  useEffect(() => {
    const fetchCode = async () => {
      const res = await getRequest(codeUrl)
      if (res.data.data !== '') {
        setCodeLink(res.data.data.android.download_url)
      }
    }
    fetchCode()
  }, [])

  return (
    <div className={'banner container'}>
      
    </div>
  )
}
