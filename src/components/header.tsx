import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import { Dialog, Transition } from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'

export default function Header() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  return (
    <header className={'header'}>
      <div className={'headerPc'}>
        <div>
          <div className="wave-logo">
            <Link href="/" passHref>
              <div>
                <img src="/assets/image/logo.png" alt="Wave" />
              </div>
            </Link>
            <p>北京压缩矩阵科技有限公司</p>
          </div>
          <p>
            <Link href="/news">有偿资讯</Link>
            {/* <Link href="/#features">FEATURES</Link>
            <Link href="/#roadmap">ROADMAP</Link>
            <Link href="/#faq">FAQ</Link> */}
          </p>
        </div>
      </div>
      {/* <div className={'header-h5'}>
        <Link href="/" passHref>
          <div className={'logo'}>
            <img src="/assets/image/logo.png" alt="Wave" />
          </div>
        </Link>
      </div> */}

      {/* <div className={'mobileHeader'}>
        <Link href="/">
          <a>
            <img src="/assets/image/logo.png" alt="mobileLogo" />
            <span>Alpha</span>
          </a>
        </Link>
        {mobileSidebarOpen ? (
          <button type="button" aria-controls="mobile-menu" aria-expanded="false" className="-z-50 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>{' '}
          </button>
        ) : (
          <button type="button" aria-controls="mobile-menu" aria-expanded="false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>
      <Transition.Root show={mobileSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed top-20 left-0 z-40 flex h-full w-full bg-grayf9 lg:hidden"
          open={mobileSidebarOpen}
          onClose={setMobileSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div id="mobile-sidebar" className="w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed top-8 right-16 -mr-14 bg-white pt-2">
                  <button
                    className="ml-2 flex items-center justify-center bg-black bg-opacity-0 focus:outline-none dark:bg-opacity-0"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                  </button>
                </div>
              </Transition.Child>
              <nav>
                <div className="space-y-2 px-2" onClick={() => setMobileSidebarOpen(false)}>
                  <SiteNavMenu />
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0" aria-hidden="true">
          </div>
        </Dialog>
      </Transition.Root> */}
    </header>
  )
}
// const SiteNavMenu = props => {
//   return (
//     <p className={'menuHeader'}>
//       <Link href="/#wave">
//         <a>WAVE</a>
//       </Link>
//       <Link href="/#features">
//         <a>FEATURES</a>
//       </Link>
//       <Link href="/#community">
//         <a>COMMUNITY</a>
//       </Link>
//       <Link href="/">
//         <a>ROADMAP</a>
//       </Link>
//       <Link href="/#faq">
//         <a>FAQ</a>
//       </Link>
//       <Link href="/#download">
//         <a>CONTACT</a>
//       </Link>
//     </p>
//   )
// }
