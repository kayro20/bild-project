import React from 'react'
import { Button, Paper, withStyles } from '@material-ui/core'

import Carousel from '../ui/Carousel/Index'
import Favorite from '../ui/Favorite'
import Header from './Header'
import Subheader from './SubHeader'
import ItemList from './ItemList'

const Card = ({ classes, info, listInfo }) =>
  <div className={classes.Card_root} data-testid='card'>
    <Paper elevation={0} className={classes.Card_carousel}>
      <Carousel images={info.photos} />
      <div className={classes.Card_favorite}><Favorite /></div>
    </Paper>

    <Paper elevation={0} className={classes.Card_info}>
      <Header>{info.name}</Header>
      <Subheader address={info.address} />
      {
        Object.keys(listInfo).map((info, index) => {
          return !!listInfo[info].text
            && <ItemList
              key={index}
              icon={listInfo[info].icon}
              text={listInfo[info].text}
            />
        })
      }

      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={classes.Card_button}
        fullWidth
        size="large"
      >
        Ver mais
      </Button>
    </Paper>
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
  },
  Card_carousel: {
    position: 'relative'
  },
  Card_favorite: {
    position: 'absolute',
    top: 10,
    right: 10
  },
  Card_info: {
    marginTop: -15,
    zIndex: 2,
    borderRadius: 16,
    padding: '16px 24px 8px 24px'
  },
  Card_button: {
    textTransform: 'none',
    fontFamily: "'Montserrat',sans-serif",
    fontWeight: 700,
    borderRadius: 16,
    height: 49,
    marginTop: 16
  }
})

export default withStyles(styles)(Card)