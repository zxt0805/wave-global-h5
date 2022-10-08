/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-08 18:32:10
 * @FilePath: /wave-chinese-website/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import HeadImg from 'components/index/headImg'
import BaseInfo from 'components/index/baseInfo'
import StaticInfo from 'components/index/staticInfo'
import FixBottom from 'components/index/fixedBottom'

import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'
import { postRequest } from '../../services/getAxios'
import { data } from 'autoprefixer'
export default Home

function Home() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', '')

  return <>{NormalLayout(Main(), pageModel)}</>
}

let params = {
  name: 'requestUserInfo',
  data: {},
}
postMessage(params, function (data) {
  if (data != null) {
    console.log(JSON.stringify(data))
  }
})

function requestAddCalendar() {
  console.log('call requestAddCalendar')

  let params = {
    name: 'requestCalendar',
    data: {
      collection_id: '1',
      title: 'Wave平台EVT【胜利】开售，快去看看吧！',
      description: 'Wave平台EVT【胜利】开售，快去看看吧！',
      start_time: '1665331200',
      end_time: '16653312300',
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
      collection_id: '1',
      title: 'Wave平台EVT【胜利】开售，快去看看吧！',
      description: 'Wave平台EVT【胜利】开售，快去看看吧！',
      start_time: '1665331200',
      end_time: '16653312300',
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
  console.log('call requestRoute')

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

function Main() {
  const router = useRouter()
  const collectionUrl = '/api/collection'
  useEffect(() => {
    fetchCode()
  }, [])

  const fetchCode = async () => {
    let params = {
      collection_id: '4',
    }
    const res = await postRequest(collectionUrl, params)
    console.log('res:' + JSON.stringify(res.data))
  }

  const [saleStatus, setSaleStatus] = useState('saling')
  const [countDown, setCountDown] = useState(1000000)
  const [isLogin, setIsLogin] = useState(false)
  // var countDown = 0

  useEffect(() => {
    console.log(router.query)
    console.log(router.query.id)
    setSaleStatus('saling')
    requestUserInfo()
    checkCalendar()
    // setTimeout(() => {
    //   setCountDown(1000000)
    // }, 2000)
  }, [])
  return (
    <div className="index-wrap">
      <HeadImg></HeadImg>
      <BaseInfo countDown={countDown} />
      <StaticInfo></StaticInfo>
      <div className="staticinfo-wrap"><img
          className="rounded-xl"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F8%2F5453005f74be2.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1667024522&t=261ed7cc222e220fdfff3d24cc118eb7"
          alt=""
        /></div>
      <div className="staticinfo-wrap license">
        <span>License</span>
        <img src="/assets/image/icon_arrow.png" alt="" />
      </div>
      {isLogin ? <>login</> : <>not login</>}
      {/* <button className={"button"} onClick={() => requestUserInfo()}>请求获取用户信息</button>
      <button className={"button"} onClick={() => requestAddCalander()}>请求添加日历</button>
      <button className={"button"} onClick={() => requestPayOrder()}>请求支付订单</button>
      <button className={"button"} onClick={() => requestRoute()}>请求路由</button> */}
      <FixBottom
        saleStatus={saleStatus}
        addToCalendar={() => requestAddCalendar()}
        payOrder={() => requestPayOrder()}
        gotoTrade={() => requestRoute()}
      />
    </div>
    /* <About /> */
    /* <Features />
    <>
      <Banner />
      
      {/* <About /> */
    /* <Features />
      <Roadmap />
      <RoadmapMobile />
      <Faq />
      <Down /> */
  )

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
    console.log('call requestRoute')

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
}
