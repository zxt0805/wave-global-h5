/*
 * @Author: zhuxiaotong zhuxiaotong@diynova.com
 * @Date: 2022-09-29 11:46:48
 * @LastEditors: zhuxiaotong zhuxiaotong@diynova.com
 * @LastEditTime: 2022-10-26 17:02:31
 * @FilePath: /wave-global-h5/src/components/Layout/normalLayout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Head from 'next/head'
import { PageModel } from 'model/navModel'

export default function NormalLayout(children: React.ReactNode, pageModel: PageModel = null): JSX.Element {
  return (
    <>
      <Head>
        <title>{pageModel?.title}</title>
        {/* <meta name="description" content={pageModel?.description} /> */}
        <meta name="keywords" content="newtonproject" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageModel?.title} />
        <meta property="og:description" content={pageModel?.description || 'WAVE'} />
        <meta property="og:image" content={pageModel?.image || "https://app.waveuniverse.org/assets/image/logo-wave.png"} />
        {/* <meta property="og:url" content="https://app.waveuniverse.org/" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      {children}
      <div className={pageModel.name}>{/* <Footer /> */}</div>
    </>
  )
}
