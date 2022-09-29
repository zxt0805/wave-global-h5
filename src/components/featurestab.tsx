import { useState } from 'react'
import styles from 'styles/Home.module.scss'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Featurestab() {
  let [categories] = useState({
    'Dynamic Smart Contract Access': [
      {
        id: 1,
        title: 'Dynamic Smart Contract Access',
        date: 'Seamlessly Browse, View, Create, Reach, and Connect, all in App for NFTs and EVTs.',
        src: '/assets/image/f1.png',
      },
    ],
    'Encrypted Variable Token Support': [
      {
        id: 2,
        title: 'Encrypted Variable Token Support',
        date: 'Ample support for EVT tech structure. An innovative upgrade to the existing NFT smart contract.',
        src: '/assets/image/f2.png',
      },
    ],
    'Community First': [
      {
        id: 3,
        title: 'Community First',
        date: 'Open-arm cross border media inclusion from all participating countries. Culturally diverse, a place where the world’s digital cultures gather.',
        src: '/assets/image/f3.png',
      },
    ],
    // 'Multi-Chain Support': [
    //   {
    //     id: 4,
    //     title: 'Multi-Chain Support',
    //     date: 'Wider selection, more earning potential. MATIC, NEW, ETH, BNB compatible.',
    //     src: '/assets/image/f4.png',
    //   },
    // ],
    'Smart Categorization': [
      {
        id: 5,
        title: 'Smart Categorization',
        date: 'Sensible categorization for easy digital entertainment asset discovery.',
        src: '/assets/image/f5.png',
      },
    ],
    'Tool Abundance': [
      {
        id: 6,
        title: 'Tool Abundance',
        date: 'Built in creation and promotional tools. Easy to use one-stop-shop for users who want to create their own movie theatres or unique viewing venues.',
        src: '/assets/image/f6.png',
      },
    ],
    'App Customer Support': [
      {
        id: 7,
        title: 'App Customer Support',
        date: 'Reliable support for your wallet management.',
        src: '/assets/image/f7.png',
      },
    ],
  })

  return (
    <div className={styles.featurestabBox}>
      <div className={styles.featurestab}>
        <Tab.Group>
          <Tab.List className="pt-20">
            {Object.keys(categories).map(category => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-72 py-2.5 text-xl font-medium leading-10',
                    'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2',
                    selected ? 'border-imgcol border-b-2 border-solid text-black' : 'text-grayc4'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 h-[600px]">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
                )}
              >
                <ul>
                  {posts.map(post => (
                    <li key={post.id} className={styles.featlist}>
                      <div className="w-[380px] xl:w-[580px]">
                        <img className="z-10 mx-auto w-3/5" src={post.src} alt="featListImg" />
                        <img className="absolute -top-36 left-0 w-5/6" src="/assets/image/fbg.png" alt="fbg" />
                      </div>
                      <div className="z-10 w-80 text-left text-lg">
                        <h3 className="text-black">{post.title}</h3>
                        <p className="pt-4 leading-8 text-gray666">{post.date}</p>
                      </div>
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
