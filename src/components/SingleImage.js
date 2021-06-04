import PropTypes from 'prop-types'
import React from 'react'
import icon_3dsmax from '../images/icon_3dsmax.png'
import icon_marmoset4 from '../images/icon_marmoset4.png'
import icon_photoshop from '../images/icon_photoshop.png'
import icon_subs from '../images/icon_subs.png'
import icon_zbrush from '../images/icon_zbrush.png'

const SingleImage = ({prop, imageItemUri}) => {
  console.log(`무야호 ${JSON.stringify(imageItemUri, null, 2)}`);

  return ( 
    <div>
    <span className="image main">
      <img src={imageItemUri} alt="" />
    </span>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
      <div style={{ display: 'flex', paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ padding: 10 }}>
          <img src={icon_3dsmax} style={{ width: 36, height: 36 }} width={36} height={36} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_zbrush} style={{ width: 36, height: 36 }} width={36} height={36} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_subs} style={{ width: 36, height: 36 }} width={36} height={36} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_marmoset4} style={{ width: 36, height: 36 }} width={36} height={36} />
        </div>
        <div style={{ padding: 10 }}>
          <img src={icon_photoshop} style={{ width: 36, height: 36 }} width={36} height={36} />
        </div>
      </div>
      <div style={{ }}>2021.06.04</div>
    </div>
    </div>
  )
}

export default SingleImage
