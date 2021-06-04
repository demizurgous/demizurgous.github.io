import React from 'react'
import SimpleImageSlider from "react-simple-image-slider"

const WIDTH = 896
const HEIGHT = 504

const Imageset = ({prop, images}) => {
  console.log(`비비빔밥 ${JSON.stringify(images, null, 2)}`)
    return (
          <div className="image main">
            <SimpleImageSlider
              width={WIDTH}
              height={HEIGHT}
              images={[
        {
          uri: 'https://mdn.mozillademos.org/files/7693/catfront.png',
        },
      ]}
            />
          </div>
        );
}

export default Imageset
