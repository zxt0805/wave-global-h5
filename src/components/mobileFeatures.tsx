import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Tab } from '@headlessui/react'
import styles from 'styles/Home.module.scss'
import 'swiper/css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileFeatures() {
  let [featuresList] = useState({
    'Dynamic NFT Access (DNA)': [
      {
        id: 1,
        date: 'Seamlessly Mint-Launch-Reach-Connect all in App',
        src: '/assets/image/f1.png',
      },
    ],
    'Community First': [
      {
        id: 2,
        date: 'Open-arm subculture inclusion. Culturally diverse, a place where all internet cultures gather',
        src: '/assets/image/f2.png',
      },
    ],
    'Smart Categorization': [
      {
        id: 3,
        date: 'Sensible categorization for easy NFT discovery',
        src: '/assets/image/f3.png',
      },
    ],
    'Tool Abundance': [
      {
        id: 4,
        date: 'Built in creation and promotional tools. Easy to use one-stop-shop',
        src: '/assets/image/f4.png',
      },
    ],
    'App Customer Support': [
      {
        id: 5,
        date: 'Reliable support for your wallet management',
        src: '/assets/image/f5.png',
      },
    ],
  })

  return (
    <div className={styles.mobileTab}>
      <div>
        <Tab.Group>
          <div>
            <Swiper observeParents={true} observer={true} spaceBetween={5} slidesPerView={'auto'}>
              <Tab.List className="flex space-x-1 p-1">
                {Object.keys(featuresList).map((item, index) => (
                  <SwiperSlide key={index} className="w-auto pl-4">
                    <Tab
                      className={({ selected }) =>
                        classNames(
                          'z-50 h-10 text-base font-semibold leading-10',
                          'ring-white',
                          selected ? 'z-50 bg-white' : 'text-grayc4 hover:bg-white/[0.12]'
                        )
                      }
                    >
                      {item}
                    </Tab>
                  </SwiperSlide>
                ))}
              </Tab.List>
            </Swiper>
          </div>
          <Tab.Panels className={styles.tabListBox}>
            {Object.values(featuresList).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames('rounded-xl bg-white', 'ring-white ring-opacity-60 ring-offset-2')}
              >
                <ul>
                  {posts.map((post, i) => (
                    <li key={i}>
                      <h3>{post.date}</h3>
                      <img src={post.src} alt="img" />
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}
