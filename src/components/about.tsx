/*
 * @Author: liukeke liukeke@diynova.com
 * @Date: 2022-09-21 10:43:33
 * @LastEditors: liukeke liukeke@diynova.com
 * @LastEditTime: 2022-09-28 15:14:39
 * @FilePath: /wave-chinese-website/src/components/about.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import styles from 'styles/Home.module.scss'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default About

function About() {
  let aboutList = [
    {
      title: 'NFT:元宇宙的数字资产确权',
      content:
        'NFT进一步拓宽数字内容资产化边界，NFT(Non fungible token, 非同质化代币)是映射特定资产的非同质化通证，绝大部分是基于以太坊ERC协议上，即在以太坊上铸造与发行。通过',
      src: '/assets/image/nft1.jpg',
    },
    {
      title: '数字藏品:NFT合规下中国特色化探索',
      content:
        '数字藏品是NFT的一种应用形式，国内数字藏品总增长态势讯猛，数字藏品是通过加密运算技术，将图片，音频，模型等数字资产或实体写入智能合约，具有独立认证代码和元数据，可供',
      src: '/assets/image/nft2.jpg',
    },
    {
      title: '国外NFT与国内数字藏品对比',
      content: '国外NFT市场发展成熟，炒作风险难以规避；中国数字藏品探索合法合规的特色发展路径',
      src: '/assets/image/nft3.jpg',
    },
    {
      title: '数字藏品营销探索',
      content:
        '作为新型私域营销工具，数字藏品将成为增长新引擎，在数字经济时代，数字藏品是一个更高效率，综合能力更强的营销工具',
      src: '/assets/image/nft4.jpg',
    },
    {
      title: '中国数字藏品未来展望',
      content:
        '数字藏品营销模式进军元宇宙，全面链接商业时代。近期可期的数字藏品模式主要表现为数字藏品营销化探索，数字藏品营销可以帮助品牌',
      src: '/assets/image/nft5.jpg',
    },
    {
      title: '数字藏品应用场景',
      content:
        '藏品应用场景百花齐放，未来在多领域有强吸引力，数字藏品场景可分为两大类：典型应用场景及衍生场景。典型场景藏品是目前数字藏品的市场',
      src: '/assets/image/nft6.jpg',
    },
  ]
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  return (
    <div className={'hot-box container'}>
      <h2>有偿资讯</h2>
      <ul>
        {aboutList.map((item, i) => {
          return (
            <li key={i} onClick={openModal}>
              <img src={item.src} alt="img" />
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>付费阅读：5元/次</p>
            </li>
          )
        })}
      </ul>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className=" relative mt-3 text-lg font-medium leading-6 text-gray-900">
                    扫码付费阅读：5元/次
                    <button
                      type="button"
                      className="absolute -top-[8px] right-0 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      关闭
                    </button>
                  </Dialog.Title>
                  <div className="mx-auto mt-2">
                    <img className="mx-auto h-[300px]" src={'/assets/image/payment.jpg'} alt="img" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
