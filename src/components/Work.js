import React from 'react'
import SingleImage from './SingleImage'
import Imageset from './Imageset'
import Description from './Description'

const Work = (props) => {
  const portfolio = props.portfolio
  const [loading, setLoading] = React.useState('is-loading')

  React.useEffect(()=>{
    const timeoutId = setTimeout(() => {
      setLoading('')
    }, 100)
    return ()=>{clearTimeout(timeoutId)}
  }, [])

  return (
    <div className={`article ${loading} ${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{...props.timeout ? {display: 'flex'} : {display: 'none'}}}>
      {portfolio.items.map((item, idx)=>{
        if (item.type === 'imageset') {
          return <Imageset key={idx} images={item.images} />
        }
        if (item.type === 'image') {
          return <SingleImage key={idx} imageItemUri={item.uri} />
        }
        if (item.type === 'description') {
          return <Description key={idx} content={item.description} />
        }
      })}
    </div>
  )
}

export default Work
