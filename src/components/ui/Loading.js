import React from 'react'
import { CircularProgress, withStyles } from '@material-ui/core'

const styles = () => ({
  Loading: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  Loading_wrapper: {
    padding: '20px',
    textAlign: 'center'
  }
})

export default withStyles(styles)(
  ({ size, classes, ...props }) =>
  <div className={classes.Loading_wrapper}>
    <CircularProgress size={size || 80} className={classes.Loading} {...props} />
  </div>
)
