import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

export default RoadmapMobile

let roadmapData = [
  {
    title: '2022.4',
    content: 'Completed the NFT one-stop feature set.',
  },
  {
    title: '2022.5',
    content: 'Implemented the crypto family auction function.',
  },
  {
    title: '2022.6',
    content: 'Integrated encrypted player for EVT support.',
  },
  {
    title: '2022.7',
    content: 'Completed the multi-asset trading functions. Released 1.0-beta.',
  },
  {
    title: '2022.8',
    content: 'More web3 features and operational tools.',
  },
  {
    title: '2022.9',
    content: 'Music player and NFT blind box.',
  },
  {
    title: '2022.10',
    content: 'EVT blind box.',
  },
  {
    title: '2022.11',
    content: 'EVT DAO.',
  },
  {
    title: '2022.12',
    content: 'Growth mechanism and economic model.',
  },
]

function RoadmapMobile() {
  return (
    <div className={'roadmap-mobile'}>
      <h2>ROADMAP</h2>
      <div className={'roadmap'}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
        >
          {roadmapData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <h3>{item.title}</h3>
                {index < 4 ? (
                  <div className={'split'}>
                    <span></span>
                  </div>
                ) : (
                  <div className={'split nosplit'}>
                    <span></span>
                  </div>
                )}
                <p>{item.content}</p>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}
