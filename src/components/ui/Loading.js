import React from 'react'

import { CircularProgress, withStyles } from '@material-ui/core'

const Loading = ({ classes, size, ...props }) =>
  <div className={classes.Loading_wrapper}>
    <CircularProgress size={size || 80} className={classes.Loading} {...props} />
  </div>

const styles = () => ({
  Loading_wrapper: {
    padding: '20px',
    textAlign: 'center'
  },
  Loading: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  }
})

export default withStyles(styles)(Loading)
