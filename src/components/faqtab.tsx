import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function Faqtab() {
  let faqTabListBefor = [
    {
      title: 'What is wave good for ?',
      date: 'WAVE is a web3 platform of global digital entertainment. You can view various digital assets and earn from trading and ticketing, or you can build a community of fans within the App.',
    },
    {
      title: 'What is EVT ?',
      date: 'EVT (Encrypted Variable Token) is an upgraded evolution of the NFT. It was innovated on the Newton Blockchain and can allow users to own digital assets that evolve with time. It has the capability to be reprogrammed throughout various ownerships.',
    },
    {
      title: 'What is EVT different from NFT ?',
      date: 'EVT allows various owners to program and reprogram its smart contracts. An EVT is a living contract.',
    },
    {
      title: 'How do I start with WAVE ?',
      date: 'Download WAVE via Google Play and iOS App Store, register, and start.',
    },
  ]
  let faqTabListNext = [
    {
      title: 'How to earn with WAVE ?',
      date: 'Users can sell the purchased digital assets, create tickets to sell viewing rights.',
    },
    {
      title: 'What kind of digital assets are on WAVE ?',
      date: "WAVE is the world's borderless digital entertainment asset library. Users can find featured films, short films, TV series, music, metaverse celebrities as well as large digital event venues.",
    },
    {
      title: 'How do I turn my earnings into cash ?',
      date: 'You can transfer the earned cryptos from WAVE App to some crypto exchanges and cash it out.',
    },
  ]
  const [show, isShow] = useState(true)
  return (
    <div className={'faqTab'}>
      <div className={'top'}>
        {faqTabListBefor.map((item, index) => {
          return (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'current' : ''}`}>
                    <span>{item.title}</span>
                    <img src={`${open ? '/assets/image/faq1.png' : '/assets/image/faq2.png'}`} alt="img" />
                  </Disclosure.Button>
                  <Disclosure.Panel>{item.date}</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        })}
      </div>
      <div hidden={show} className={'bottom'}>
        {faqTabListNext.map((item, index) => {
          return (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className={`${open ? 'current' : ''}`}>
                    <span>{item.title}</span>
                    <img src={`${open ? '/assets/image/faq1.png' : '/assets/image/faq2.png'}`} alt="img" />
                  </Disclosure.Button>
                  <Disclosure.Panel>{item.date}</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          )
        })}
      </div>
      <p onClick={() => isShow(!show)}>{show ? 'More' : 'Less'}</p>
    </div>
  )
}
