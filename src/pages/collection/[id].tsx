/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-10-10 11:43:08
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

export default Home

function Home() {
  let pageModel = new PageModel('WAVE', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  const { t, i18n } = useTranslation();

  const router = useRouter()
  const { id } = router.query

  const [isLogin, setIsLogin] = useState(false)
  const [collectionInfo, setCollectionInfo] = useState<CollectionInfo>()
  const [calendarInfo, setCalendarInfo] = useState({})
  const [hasAddCalendar, setHasAddCalendar] = useState(false)
  

  const collectionUrl = '/api/collection'

  useEffect(() => {
    console.log("init");
    requestLanguage()
    requestUserInfo()
    if (id != undefined) {
      fetchCollectionInfo()
    }
  }, [id])


  function fetchCollectionInfo() {
    if (isLogin) {
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
    console.log('call requestAddCalendar')

    let params = {
      name: 'requestCalendar',
      data: calendarInfo,
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function checkCalendar(info) {
    let params = {
      name: 'checkCalendar',
      data: info,
    }
    postMessage(params, function (data) {
      if (data != null && data.error_code == 1) {
        if (data.result['has_add_calendar'] == 1) {
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
      if (data != null && data.error_code == 1) {
        i18n.changeLanguage(JSON.parse(data.result)['language'])
      }
    })
  }

  function requestPayOrder() {
    if (!isLogin) {
      let params = {
        name: 'requestRoute',
        data: {
          path: '/login/',
          params: {},
        },
      }
      postMessage(params, function (data) {
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
    } else {
      let params = {
        name: 'requestPayOrder',
        data: {
          collection_id: collectionInfo.id.toString(),
          price: collectionInfo.sell_price,
          to_address: collectionInfo.specifications.contract_address,
        },
      }
      postMessage(params, function (data) {
        if (data != null) {
          console.log(JSON.stringify(data))
        }
      })
    }
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
        setCollectionInfo(info)
        initCalendarInfo(info)
      }
    })
  }

  function initCalendarInfo(collectionInfo) {
    const info = {
      title: 'Wave平台EVT【胜利】开售，快去看看吧！',
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

  function postMessage(params, callback) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      // @ts-ignore
      if (window && window.flutter_inappwebview) {
        console.log('send info android')
        // @ts-ignore
        window.flutter_inappwebview.callHandler(JSON.stringify(params), callback)
        // @ts-ignore
      } else if (window && window.webkit) {
        console.log('send info ios')
        // @ts-ignore, add ios callback
        window.webkit.messageHandlers[handler].postMessage(params)
      } else {
        console.log(JSON.stringify(params))
      }
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
        {/* {t("title")} */}
        <HeadImg collectionInfo={collectionInfo}></HeadImg>
        <BaseInfo collectionInfo={collectionInfo} />
        <StaticInfo collectionInfo={collectionInfo}></StaticInfo>
        <div className="staticinfo-wrap">
          <img className="rounded-xl" src={collectionInfo.banner} alt="" />
        </div>
        <a className="staticinfo-wrap license" href={collectionInfo.license_url}>
          <span>{t('LICENSE')}</span>
          <img src="/assets/image/icon_arrow.png" alt="" />
        </a>
        <FixBottom
          collectionInfo={collectionInfo}
          addToCalendar={() => requestAddCalendar()}
          payOrder={() => requestPayOrder()}
          gotoTrade={() => gotoTrade()}
        />
      </div>
    )
  }
}
