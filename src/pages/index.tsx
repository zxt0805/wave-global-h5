/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: weixuefeng weixuefeng@diynova.com
 * @LastEditTime: 2022-09-29 13:19:49
 * @FilePath: /wave-chinese-website/src/pages/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Banner from 'components/banner'
import About from 'components/about'
import Roadmap from 'components/roadmap'
import RoadmapMobile from 'components/roadmapMobile'
import Features from 'components/features'
// import Community from 'components/community'
import Faq from 'components/faq'
import Down from 'components/down'
// import MobileFeaturetab from 'components/mobilefeaturestab'
import NormalLayout from 'components/Layout/normalLayout'
import { PageModel } from 'model/navModel'

export default Home

function Home() {
  let pageModel = new PageModel('北京压缩矩阵科技有限公司', 'WAVE', '')
  return <>{NormalLayout(Main(), pageModel)}</>
}

function requestUserInfo() {
  console.log('call requestUserInfo')

  let params = {
    name: 'requestUserInfo',
    data: {},
  }
  postMessage(params, function (data) {
    if (data != null) {
      console.log(JSON.stringify(data))
    }
  })
}

function requestAddCalander() {
  console.log('call requestAddCalander')

  let params = {
    name: 'requestCalander',
    data: {},
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
  // @ts-ignore
  if (window && window.flutter_inappwebview) {
    // @ts-ignore
    window.flutter_inappwebview.callHandler('postMessage', JSON.stringify(params), callback)
    // @ts-ignore
  } else if(window && window.webkit){
    // @ts-ignore, add ios callback
    window.webkit.messageHandlers[handler].postMessage(params)
  } else {
    console.log(JSON.stringify(params))
  }
}

function Main() {
  return (
    <>
      <Banner />
      <button className={"button"} onClick={() => requestUserInfo()}>请求获取用户信息</button>
      <button className={"button"} onClick={() => requestAddCalander()}>请求添加日历</button>
      <button className={"button"} onClick={() => requestPayOrder()}>请求支付订单</button>
      <button className={"button"} onClick={() => requestRoute()}>请求路由</button>
      {/* <About /> */}
      {/* <Features />
      <Roadmap />
      <RoadmapMobile />
      <Faq />
      <Down /> */}
    </>
  )
}
