import React from 'react'

import { withStyles } from '@material-ui/core'

import Dot from '../../ui/Dot'

const Dots = ({ classes, dots, activeIndex, onChangeIndex }) =>
  <div className={classes.Dots_root}>
    {
      dots.map((dot, index) =>
        <Dot
          active={activeIndex === index}
          key={index}
          onClick={() => onChangeIndex(index)}
          data-testid='carousel-dot'
        />
      )
    }
  </div>

const styles = () => ({
  Dots_root: {
    position: 'absolute',
    right: 8,
    bottom: 20,
    display: 'flex'
  }
})

export default withStyles(styles)(Dots)
