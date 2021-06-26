import testImage from '../images/test_Viewport_017.png'
import testThumbnail from '../images/test_Viewport_078.png'

const clone = (target) => {
  return JSON.parse(JSON.stringify(target))
}

// [EXAMPLE]

const testPortfolio = {
  title: 'beauty shots',
  date: 'good day tomorrow',
  description: 'bass ass shit',
  conceptUri: 'https://www.wikipedia.org',
  thumbnailUri: testThumbnail,
  items: [
    {
      type: 'imageset',
      title: 'Yaho',
      description: 'moo ya ho',
      images: [
        {
          uri: testImage,
        },
        {
          uri: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        },
        {
          uri: "https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n",
        },
        {
          uri: "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        }
      ]
    },
    {
      type: 'description',
      title: 'Yaho',
      description: 'moo ya ho',
    },
    {
      type: 'image',
      title: 'Yaho',
      description: 'moo ya ho',
      uri: 'https://lh3.googleusercontent.com/Q23Kyw2BjmYgLSlIJICmMhCWbUMpnx3GgTu4jkJfsL0IUoOlri5jRHpHtCaPUSPQJWnNYOZnZXRuXozhd0INPDVpdbUGCO8vCnpb60-tptj9p20u_QZC=w1920-h2420-n'
    },
  ]
}

const knight = {
  title: 'knight',
  date: '2021-06-26',
  description: 'knight',
  conceptUri: 'https://www.artstation.com/artwork/rRLLeO',
  thumbnailUri: testThumbnail,
  items: [
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/096/large/min-yeonhong-01.jpg?1624267887'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/100/large/min-yeonhong-02.jpg?1624267896'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/103/large/min-yeonhong-03.jpg?1624267905'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/109/large/min-yeonhong-04.jpg?1624267915'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/114/large/min-yeonhong-05.jpg?1624267922'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/125/large/min-yeonhong-06.jpg?1624267930'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/131/large/min-yeonhong-07.jpg?1624267938'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/139/large/min-yeonhong-08.jpg?1624267947'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/149/large/min-yeonhong-09.jpg?1624267958'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/154/large/min-yeonhong-10.jpg?1624267966'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/156/large/min-yeonhong-11.jpg?1624267974'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/165/large/min-yeonhong-12.jpg?1624267982'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/170/large/min-yeonhong-13.jpg?1624267993'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/172/large/min-yeonhong-14.jpg?1624268001'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/176/large/min-yeonhong-15.jpg?1624268009'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/180/large/min-yeonhong-101.jpg?1624268019'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/191/large/min-yeonhong-102.jpg?1624268036'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/203/large/min-yeonhong-103.jpg?1624268050'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/215/large/min-yeonhong-104-1.jpg?1624268073'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/225/large/min-yeonhong-105.jpg?1624268095'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/233/large/min-yeonhong-106.jpg?1624268115'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/241/large/min-yeonhong-107.jpg?1624268128'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/360/large/min-yeonhong-108.jpg?1624268346'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/250/large/min-yeonhong-109.jpg?1624268151'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/253/large/min-yeonhong-110-1.jpg?1624268161'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/256/large/min-yeonhong-111-1.jpg?1624268173'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/289/large/min-yeonhong-115.jpg?1624268220'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/262/large/min-yeonhong-112-1.jpg?1624268184'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdnb.artstation.com/p/assets/images/images/038/851/265/large/min-yeonhong-113-1.jpg?1624268195'
    },
    {
      type: 'image',
      title: 'pic1',
      description: '',
      uri: 'https://cdna.artstation.com/p/assets/images/images/038/851/274/large/min-yeonhong-114.jpg?1624268204'
    },
  ]
}

// const knight = {
//   title: 'knight',
//   date: '2021-06-26',
//   description: 'knight',
//   conceptUri: 'https://www.artstation.com/artwork/rRLLeO',
//   thumbnailUri: testThumbnail,
//   items: [
//     {
//       type: 'image',
//       title: 'pic1',
//       description: 'a',
//       uri: 'http://localhost:8888/IMG_1851.jpg'
//     },
//     {
//       type: 'image',
//       title: 'pic2',
//       description: 'b',
//       uri: 'http://localhost:8888/min-yeonhong-02.jpg'
//     },
//   ]
// }

export default {
  first: knight,
  total: [knight]
}
