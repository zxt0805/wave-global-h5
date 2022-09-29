export default Features

let featurerData = [
  {
    title: 'Multi-Asset Trading',
    img: '/assets/image/fea1.png',
    content:
      'WAVE integrates EVT (Encrypted Variable Token) and NFT (Non-Fungible Token) technology to provide users with browsing, viewing, bidding and listing to sell.',
  },
  {
    title: 'Community First',
    img: '/assets/image/fea2.png',
    content:
      "Open-arm cross border media inclusion from all participating countries. Culturally diverse, a place where the world's digital cultures gather.",
  },
  {
    title: 'Ticketing-To-Earn',
    img: '/assets/image/fea3.png',
    content: 'Users who own assets of film and  television series can distribute tickets to earn.',
  },
]

function Features() {
  return (
    <div id="features" className={'features'}>
      <div className={'container'}>
        <h2>FEATURES</h2>
        <ul>
          {featurerData.map((item, index) => {
            return (
              <li key={index}>
                <h3>
                  <img src={item.img} alt="img" />
                  {item.title}
                </h3>
                <p>{item.content}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
