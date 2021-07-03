import icon_3dsmax from '../images/icon_3dsmax.png'
import icon_marmoset4 from '../images/icon_marmoset4.png'
import icon_photoshop from '../images/icon_photoshop.png'
import icon_subs from '../images/icon_subs.png'
import icon_zbrush from '../images/icon_zbrush.png'

import React from 'react'

const ICON_SIZE = 24

const Icons = ({buttonURL}) => {
  const isMobile = React.useCallback(() => {
    if (typeof window !== 'undefined') {
      const _check = window.matchMedia && window.matchMedia("(max-width: 480px)").matches
      console.log(`황당하네 ${_check}`)
      return _check
    }
    return true
  }, typeof window)

  const wrapperStyle = isMobile()? {
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
  } : { display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}
  return (
    <div style={wrapperStyle}>
      <div style={{ display: 'flex', paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ padding: 10}}>
          <img src={icon_3dsmax} style={{ borderRadius: '20%', width: ICON_SIZE, height: ICON_SIZE }} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_zbrush} style={{ borderRadius: '20%',  width: ICON_SIZE, height: ICON_SIZE }} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_subs} style={{  borderRadius: '20%', width: ICON_SIZE, height: ICON_SIZE }} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_marmoset4} style={{  borderRadius: '20%', width: ICON_SIZE, height: ICON_SIZE }} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_photoshop} style={{ border: '3px', boxShadow: 'inset 0 0 0 3px #ffffff', borderRadius: '20%',  width: ICON_SIZE, height: ICON_SIZE }} width={ICON_SIZE} height={ICON_SIZE} />
        </div>
      </div>
      <button style={{lineHeight: 'normal', fontSize:8, padding:'10px', height:'30px'}} onClick={()=>{window.open(buttonURL)}}>Concept Source</button>
    </div>
  )
}

export default Icons

