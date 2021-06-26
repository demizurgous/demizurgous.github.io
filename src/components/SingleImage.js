import PropTypes from 'prop-types'
import React from 'react'
import {ModalContext} from '../context/context'

const SingleImage = ({prop, imageItemUri}) => {
  console.log(`무야호 ${JSON.stringify(imageItemUri, null, 2)}`);
  const {toggleFullsize} = React.useContext(ModalContext);

  return ( 
    <div>
    <span className={`image main`} style={{position: 'static'}}>
      <img className={``} src={imageItemUri} alt="" onClick={()=>{
        console.log('clicked!!!')
        toggleFullsize(imageItemUri)
      }} />
    </span>
    </div>
  )
}

export default SingleImage
