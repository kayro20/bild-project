import React from 'react'

import { withStyles } from '@material-ui/core'

import Text from '../ui/Text'

const ItemList = ({ classes, icon, text }) =>
<div className={classes.ItemList_root} data-testid='list-item'>
  <img src={`/assets/${icon}.svg`} />
  <Text size='sm' color='black'>{text}</Text>
</div>

const styles = () => ({
  ItemList_root: {
    display: 'flex',
    gap: 10,
    margin: '16px 0'
  }
})

export default withStyles(styles)(ItemList)