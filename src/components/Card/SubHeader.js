import React from 'react'

import { withStyles } from '@material-ui/core'

import Text from '../ui/Text'

const Subheader = ({ address, classes }) =>
  <div className={classes.Subheader_root}>
    <Text size='md' color='gray'>{address.district}</Text>
    <Text size='sm' color='gray'>{address.city}</Text>
  </div>

const styles = () => ({
  Subheader_root: {
    marginBottom: 8
  }
})

export default withStyles(styles)(Subheader)
