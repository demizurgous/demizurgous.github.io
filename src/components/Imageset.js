import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Imageset = ({prop, images}) => {
    return (
          <div className="image main">
            <Carousel dynamicHeight={true} showThumbs={false} showArrows={true} onChange={()=>{}} onClickItem={()=>{}} onClickThumb={()=>{}} >
              {images.map((image)=>{
                return (
                  <div key={image.uri}>
                    <img src={image.uri} />
                  </div>
                )
              })}
            </Carousel>

          </div>
        );
}

export default Imageset
