import styles from 'styles/Home.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default function MobileFeaturesTab() {
  let featuresList = [
    {
      title: 'Dynamic Smart Contract Access',
      date: 'Seamlessly Browse, View, Create, Reach, and Connect, all in App for NFTs and EVTs.',
      src: '/assets/image/f1.png',
    },
    {
      title: 'Encrypted Variable Token Support',
      date: 'Ample support for EVT tech structure. An innovative upgrade to the existing NFT smart contract.',
      src: '/assets/image/f2.png',
    },
    {
      title: 'Community First',
      date: 'Open-arm cross border media inclusion from all participating countries. Culturally diverse, a place where the world’s digital cultures gather.',
      src: '/assets/image/f3.png',
    },
    // {
    //   title: 'Multi-Chain Support',
    //   date: 'Wider selection, more earning potential. MATIC, NEW, ETH, BNB compatible.',
    //   src: '/assets/image/f4.png',
    // },
    {
      title: 'Smart Categorization',
      date: 'Sensible categorization for easy digital entertainment asset discovery.',
      src: '/assets/image/f5.png',
    },
    {
      title: 'Tool Abundance',
      date: 'Built in creation and promotional tools. Easy to use one-stop-shop for users who want to create their own movie theatres or unique viewing venues.',
      src: '/assets/image/f6.png',
    },
    {
      title: 'App Customer Support',
      date: 'Reliable support for your wallet management.',
      src: '/assets/image/f7.png',
    },
  ]
  SwiperCore.use([Autoplay, Pagination, Navigation])
  return (
    <div className={styles.mobileFeaturesTab}>
      <div>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView="auto"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            hideOnClick: true,
            hiddenClass: 'my-button-hidden',
          }}
          observeParents={true}
          observer={true}
        >
          {featuresList.map((item, index) => {
            return (
              <SwiperSlide key={index} className="w-auto">
                <div className="px-4">
                  <h2>
                    {item.title}
                    <i></i>
                  </h2>
                </div>
                <div className={styles.slideBoxImg}>
                  <p>{item.date}</p>
                  <img src={item.src} alt="featListImg" />
                </div>
              </SwiperSlide>
            )
          })}
          <div className="swiper-button-prev">
            <img src="/assets/image/prev.png" alt="prev" />
          </div>
          <div className="swiper-button-next">
            <img src="/assets/image/next.png" alt="next" />
          </div>
        </Swiper>
      </div>
    </div>
  )
}
