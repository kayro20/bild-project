import React, { useState } from 'react'

import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import StarRoundedIcon from '@material-ui/icons/StarRounded'

import { withStyles } from '@material-ui/core'

const Favorite = ({ classes }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    isActive
      ? <StarRoundedIcon className={classes.Favorite} onClick={() => setIsActive(!isActive)} data-testid='border-star'/>
      : <StarBorderRoundedIcon className={classes.Favorite} onClick={() => setIsActive(!isActive)} data-testid='filled-star'/>
  )
}

const styles = () => ({
  Favorite: {
    fontSize: '1.8em',
    color: '#FFF',
    cursor: 'pointer'
  }
})

export default withStyles(styles)(Favorite)
