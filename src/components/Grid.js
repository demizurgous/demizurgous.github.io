import React from 'react'

const Grid = (props) => {
  const onClickItem = props.onClickItem
  const portfolios = props.portfolios

  const width = 150
  const height = 150
  return (
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
      {portfolios.map((folio)=>{
        const id = folio.title
        const onClickBox = () => {
          onClickItem(id)
        }
        return (
          <div onClick={onClickBox} style={{ width: 160, height: 200 }}>
            <img width={width} height={height} src={folio.thumbnailUri} />
            <span>{folio.description}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Grid
