import React from 'react'
import SingleImage from './SingleImage'
import Imageset from './Imageset'
import Description from './Description'

const Work = (props) => {
  const _close = props.close
  const currentArticle = props.article
  const currentArticleTimeout = props.articleTimeout
  const portfolio = props.portfolio
  console.log(`확인해보자 ${JSON.stringify(portfolio, null, 2)}`)

  return (
    <div>
      <h2 className="major">{portfolio.title}</h2>
      {portfolio.items.map((item)=>{
        console.log('yahoooo')
        console.log(item)
        console.log(JSON.stringify(item, null, 2))
        if (item.type === 'imageset') {
          return <Imageset images={item.images} />
        }
        if (item.type === 'image') {
          return <SingleImage imageItemUri={item.uri} />
        }
        if (item.type === 'description') {
          return <Description content={item.description} />
        }
      })}
    </div>
  )
}

export default Work
