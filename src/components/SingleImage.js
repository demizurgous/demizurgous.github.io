import PropTypes from 'prop-types'
import React from 'react'

const SingleImage = ({prop, imageItemUri}) => {
  console.log(`무야호 ${JSON.stringify(imageItemUri, null, 2)}`);

  const [fullsize, setFullsize] = React.useState(false)

  return ( 
    <div>
    <span className="image main" style={{position: 'static'}}>
      <img className={``} src={imageItemUri} alt="" onClick={()=>{
        setFullsize((prev)=>(!prev))}} />
    </span>
    </div>
  )
}

export default SingleImage
