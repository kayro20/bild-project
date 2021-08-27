import React from 'react'

import { withStyles } from '@material-ui/core'

const CardWithShadow = ({ classes, ...props }) =>
  <div className={classes.Card_root} data-testid='card'>
    {props.children}
  </div>

const styles = () => ({
  Card_root: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: 300,
    borderRadius: 16,
    boxShadow: `-7px 11px 20px 0px #ed72031f,
     0px 0px 0px 0px #ed720300,
     0px 7px 20px 0px #ed720300`
  }
})

export default withStyles(styles)(CardWithShadow)