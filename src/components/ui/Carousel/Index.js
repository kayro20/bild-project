import React, { useState } from 'react'

import SwipeableViews from 'react-swipeable-views'
import { withStyles } from '@material-ui/core'

import Dots from './Dots'

const Carousel = ({ classes, images }) => {
  const [index, setIndex] = useState(0)

  const changeIndex = (index) => {
    setIndex(index)
  }

  return (
    <div className={classes.Carousel_root}>
      <SwipeableViews
        enableMouseEvents
        index={index}
        onChangeIndex={changeIndex}
        className={classes.Carousel}
        data-testid='carousel-images'
      >
        {
          images.map((image, index) => <div
            style={{ backgroundImage: `url('${image}')` }}
            className={classes.Carousel_img}
            key={index}
            data-testid='carousel-image'
          >
          </div>
          )
        }
      </SwipeableViews>
      <Dots
        dots={images}
        activeIndex={index}
        onChangeIndex={changeIndex}
      />
    </div>
  )
}

const styles = () => ({
  Carousel_root: {
    position: 'relative'
  },
  Carousel: {
    borderRadius: 15,
  },
  Carousel_img: {
    width: 300,
    height: 174,
    backgroundRepeat: 'round'
  }
})

export default withStyles(styles)(Carousel)
