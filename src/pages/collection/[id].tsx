/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 22:29:08
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
import { Skeleton, Space } from 'antd'
export default Home

function Home() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function Main() {
  const router = useRouter()
  const { id } = router.query

  const [saleStatus, setSaleStatus] = useState('saling')
  const [countDown, setCountDown] = useState(1000000)
  const [isLogin, setIsLogin] = useState(false)
  const [collectionInfo, setCollectionInfo] = useState()

  const collectionUrl = '/api/collection'

  useEffect(() => {
    setSaleStatus('saling')
    requestUserInfo()
    if (id != undefined) {
      fetchCollectionInfo()
    }
    checkCalendar()
  }, [isLogin, id])

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
          setCollectionInfo(res.data.result)
        }
      }
      getCollectionInfo()
    }
  }

  function requestUserInfo() {
    console.log('call requestUserInfo')
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
      data: {
        title: 'Wave平台EVT【胜利】开售，快去看看吧！',
        description: 'Wave平台EVT【胜利】开售，快去看看吧！',
        start_time: '1665331200',
        end_time: '1665332200',
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function checkCalendar() {
    let params = {
      name: 'checkCalendar',
      data: {
        title: 'Wave平台EVT【胜利】开售，快去看看吧！',
        description: 'Wave平台EVT【胜利】开售，快去看看吧！',
        start_time: '1665331200',
        end_time: '1665332200',
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function requestPayOrder() {
    console.log('call requestPayOrder')

    let params = {
      name: 'requestPayOrder',
      data: {
        collection_id: 1,
        number: 5,
        price: '1233434',
        to_address: 'NEW182XXX',
      },
    }
    postMessage(params, function (data) {
      if (data != null) {
        console.log(JSON.stringify(data))
      }
    })
  }

  function requestRoute() {
    let params = {
      name: 'requestRoute',
      data: {
        path: '/detail/',
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
      console.log(data.result)
      if (data != null) {
        setCollectionInfo(data.result)
      }
    })
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
    console.log(collectionInfo)
    return (
      <div className="index-wrap">
        <HeadImg collectionInfo={collectionInfo}></HeadImg>
        <BaseInfo collectionInfo={collectionInfo} />
        <StaticInfo collectionInfo={collectionInfo}></StaticInfo>
        <div className="staticinfo-wrap">
          <img className="rounded-xl" src={collectionInfo.banner} alt="" />
        </div>
        <div className="staticinfo-wrap license">
          <span>License</span>
          <img src="/assets/image/icon_arrow.png" alt="" />
        </div>
        {/* {isLogin ? <>login</> : <>not login</>} */}
        <FixBottom
          collectionInfo={collectionInfo}
          saleStatus={saleStatus}
          addToCalendar={() => requestAddCalendar()}
          payOrder={() => requestPayOrder()}
          gotoTrade={() => requestRoute()}
        />
      </div>
    )
  }
}
