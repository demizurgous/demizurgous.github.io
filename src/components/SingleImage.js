import PropTypes from 'prop-types'
import React from 'react'

const SingleImage = ({prop, imageItemUri}) => {
  console.log(`무야호 ${JSON.stringify(imageItemUri, null, 2)}`);

  return ( 
    <div>
    <span className="image main">
      <img src={imageItemUri} alt="" />
    </span>
    </div>
  )
}

export default SingleImage
