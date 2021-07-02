import React from 'react'
import Icons from './Icons'

const Grid = (props) => {
  const onClickItem = props.onClickItem
  const portfolios = props.portfolios

  const width = 150
  const height = 150
  return (
    <>
   <h2 className="major" style={{}}>WORKS</h2>
    <div style={{display: 'flex', flexDirection: 'column', flex:1}}>
      {portfolios.map((folio)=>{
        const id = folio.title
        const onClickBox = () => {
          onClickItem(id)
        }
        return (
          <div key={folio.title} onClick={onClickBox} style={{flex:1, justifyContent: 'center', marginBottom: '100px' }}>
            <img className={"thumbnail"} style={{borderRadius: 15, marginBottom: '30px'}} width={'100%'} height={'auto'} src={folio.thumbnailUri} />
            <Icons buttonURL={folio.conceptUri} />
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Grid
