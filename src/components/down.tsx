import React, { useState, useEffect } from 'react'
import { isIos, isAndroid } from '../utils/isIosAndroid'
import { getRequest } from '../utils/axiosData'

export default Down

function Down() {
  const [isIosAndroidA, setIsIosAndroidA] = useState(false)
  const [codeLinkH5, setCodeLinkH5] = useState('')
  const codeUrl = '/api/version'
  useEffect(() => {
    let isIosH = isIos()
    let isAndroidH = isAndroid()
    if (isIosH) {
      setIsIosAndroidA(true)
    } else if (isAndroidH) {
      setIsIosAndroidA(false)
    }
    const fetchCodeH5 = async () => {
      const res = await getRequest(codeUrl)
      if (res.data.data !== '') {
        setCodeLinkH5(res.data.data.android.download_url)
      }
    }
    fetchCodeH5()
  }, [])
  function downContent() {
    return (
      <div className={'down-box'}>
        <ul className={'down'}>
          {isIosAndroidA == true ? (
            <li className={'ios'}>
              <a href="https://apps.apple.com/us/app/wave-nft-browser/id1626787987"></a>
            </li>
          ) : (
            <li className="android">
              <a href="https://play.google.com/store/apps/details?id=org.wave"></a>
              <a href={codeLinkH5}></a>
            </li>
          )}
        </ul>
      </div>
    )
  }
  return <div className={'down-h5'}>{downContent()}</div>
}
