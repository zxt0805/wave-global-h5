/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-13 16:23:40
 * @LastEditors: weixuefeng weixuefeng1018@gmail.com
 * @LastEditTime: 2022-10-13 14:53:40
 * @LastEditors: weixuefeng weixuefeng1018@gmail.com
 * @LastEditTime: 2022-10-13 13:16:49
 * @FilePath: /wave-chinese-website/src/pages/collection/[id].tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HeadImg from 'components/collection/headImg'
import BaseInfo from 'components/collection/baseInfo'
import StaticInfo from 'components/collection/staticInfo'
import FixBottom from 'components/collection/fixedBottom'

import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import { useEffect, useState } from 'react'

import { postRequest } from '../../services/getAxios'
import { useRouter } from 'next/router'
import { Skeleton } from 'antd'
import { CollectionInfo } from 'model/collection_model'
import { useTranslation } from 'react-i18next'
import { IS_DEBUG } from 'constants/settings'

export default Home

function Home() {
  const [title, setTitle] = useState('Collection')
  let pageModel = new PageModel(title, 'WAVE', '')
  return <>{NormalLayout(<Main setTitle={setTitle} />, pageModel)}</>
}

function Main(props) {
  const { setTitle } = props
  const { t, i18n } = useTranslation()
  const isDebug = IS_DEBUG == 'true' ? true : false
  const router = useRouter()
  const { id } = router.query
  const [isLogin, setIsLogin] = useState(false)
  const [isInApp, setIsInApp] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  const [collectionInfo, setCollectionInfo] = useState<CollectionInfo>()
  const [calendarInfo, setCalendarInfo] = useState({})
  const [hasAddCalendar, setHasAddCalendar] = useState(false)

  const collectionUrl = '/api/collection'

  useEffect(() => {
    const flag = checkIsInApp()
    if (id != undefined) {
      setTimeout(() => {
        fetchCollectionInfo(flag)
      }, 500)
    }
  }, [id])

  function fetchCollectionInfo(flag) {
    if (flag) {
      requestLanguage()
      requestCollectionInfo(id)
    } else {
      //
      let params = {
        collection_id: id.toString(),
      }
      const getCollectionInfo = async () => {
        const res = await postRequest(collectionUrl, params)
        if (res.status == 200 && res.data.error_code == 1) {
          const info = res.data.result
          setCollectionInfo(info)
          setTitle(info.name)
          initCalendarInfo(info)
        }
      }
      getCollectionInfo()
    }
  }

  function requestUserInfo() {
    let params = {
      name: 'requestUserInfo',
      data: {},
    }
    postMessage(params, function (data) {
      console.log('\r\n request user: ' + JSON.stringify(data))
      if (data != null) {
        var info = data
        if (info.error_code == 1) {
          setIsLogin(true)
        } else if (info.error_code == 2) {
          setIsLogin(false)
        } else {
          // show error message
        }
      }
    })
  }

  function requestAddCalendar() {
    let params = {
      name: 'requestCalendar',
      data: calendarInfo,
    }
    postMessage(params, function (data) {
      console.log('\r\n requestCalendar: ' + JSON.stringify(data))
      if (data != null && data.error_code == 1) {
        setHasAddCalendar(true)
      } else {
        setHasAddCalendar(false)
      }
    })
  }

  function checkCalendar(info) {
    let params = {
      name: 'checkCalendar',
      data: info,
    }
    postMessage(params, function (data) {
      console.log('\r\n checkCalendar: ' + JSON.stringify(data))

      if (data != null && data.error_code == 1) {
        if (JSON.parse(data.result)['has_add_calendar'] == 1) {
          setHasAddCalendar(true)
        } else {
          setHasAddCalendar(false)
        }
      }
    })
  }

  function requestLanguage() {
    let params = {
      name: 'requestLanguage',
      data: {},
    }
    postMessage(params, function (data) {
      console.log('\r\n requestLanguage: ' + JSON.stringify(data))
      if (data != null && data.error_code == 1) {
        i18n.changeLanguage(JSON.parse(data.result)['language'])
      }
    })
  }

  function requestPayOrder() {
    let params = {
      name: 'requestPayOrder',
      data: {
        collection_id: collectionInfo.id.toString(),
        price: collectionInfo.sell_price,
        to_address: collectionInfo.specifications.contract_address,
      },
    }

    postMessage(params, function (data) {
      console.debug('\r\n requestPayOrder: ' + JSON.stringify(data))

      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function gotoTrade() {
    let params = {
      name: 'requestRoute',
      data: {
        path: '/trade/',
        params: {},
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function gotoAssets() {
    let params = {
      name: 'requestRoute',
      data: {
        path: '/assets/',
        params: {},
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function requestCollectionInfo(id) {
    let params = {
      name: 'requestCollection',
      data: {
        collection_id: id.toString(),
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        const info = JSON.parse(data.result)
        setTitle(info.name)
        setCollectionInfo(info)
        initCalendarInfo(info)
      }
    })
  }

  function initCalendarInfo(collectionInfo) {
    const info = {
      title: t('WAVE_PLATFORM_EVT') + ` [${collectionInfo.name}] ` + t('COMMINIG_SOON'),
      description: collectionInfo.description,
      eventLocation: 'Wave',
      start_time: collectionInfo.sell_start_time,
      end_time: collectionInfo.reveals_time,
      advanceTime: 10,
      rule: 'null',
      collection_id: collectionInfo.id,
    }
    setCalendarInfo(info)
    checkCalendar(info)
  }

  function checkIsInApp() {
    var u = navigator.userAgent.toLocaleLowerCase()
    var flag = u.indexOf('wave') > -1
    setIsInApp(flag)

    if (flag) {
      setIsAndroid(u.indexOf('android') > -1)
      setIsIOS(u.indexOf('ios') > -1)
    }
    // @ts-ignore
    if (window && window.webkit && typeof handler !== 'undefined') {
      setIsIOS(true)
    }
    return flag
  }

  function postMessage(params, callback) {
    // @ts-ignore
    if (window && window.flutter_inappwebview) {
      console.log('send info android')
      // @ts-ignore
      window.flutter_inappwebview.callHandler(JSON.stringify(params), callback)
      // @ts-ignore
    } else if (window && window.webkit && typeof handler !== 'undefined' && isIOS) {
      console.log('send info ios')
      // @ts-ignore, add ios callback
      window.webkit.messageHandlers[handler].postMessage(params)
    } else {
      console.log(JSON.stringify(params))
    }
  }

  if (collectionInfo == null) {
    return (
      <div className="skeleton-wap">
        <Skeleton.Image active />
        <Skeleton active paragraph={{ rows: 20 }} />
      </div>
    )
  } else {
    return (
      <div className="index-wrap">
        <div className="hidden">
          <img alt="logo" src="/assets/image/logo.png" />
        </div>
        {/* {t("title")} */}
        <HeadImg collectionInfo={collectionInfo}></HeadImg>
        <BaseInfo collectionInfo={collectionInfo} />
        <StaticInfo collectionInfo={collectionInfo}></StaticInfo>
        <div className="staticinfo-wrap">
          <img className="rounded-xl w-full" src={collectionInfo.picture_description} alt="" />
        </div>
        { collectionInfo.license_url && <a className="staticinfo-wrap license" href={collectionInfo.license_url}>
          <span className="title">{t('LICENSE')}</span>
          <img src="/assets/image/icon-arrow.png" alt="" />
        </a> }
        <FixBottom
          hasAddCalendar={hasAddCalendar}
          collectionInfo={collectionInfo}
          isInApp={isInApp}
          addToCalendar={() => requestAddCalendar()}
          payOrder={() => requestPayOrder()}
          gotoTrade={() => gotoTrade()}
          gotoAssets={() => gotoAssets()}
        />
      </div>
    )
  }
}
