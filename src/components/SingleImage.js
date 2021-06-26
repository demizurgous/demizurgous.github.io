import React from 'react'
import {ModalContext} from '../context/context'

const SingleImage = ({imageItemUri}) => {
  const {toggleFullsize} = React.useContext(ModalContext);

  return ( 
    <div className={`image main`} style={{position: 'static'}}>
      <img className={``} src={imageItemUri} alt="" onClick={()=>{
        console.log('clicked!!!')
        toggleFullsize(imageItemUri)
      }} />
    </div>
  )
}

export default SingleImage
