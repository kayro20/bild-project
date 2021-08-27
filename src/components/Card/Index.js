import React from 'react'
import { Paper, withStyles } from '@material-ui/core'

import BildButton from '../ui/Button'
import Carousel from '../ui/Carousel/Index'
import Favorite from '../ui/Favorite'
import CardWithShadow from './CardWithShadow'
import Header from './Header'
import Subheader from './SubHeader'
import ItemList from './ItemList'

const Card = ({ classes, info, listInfo }) =>
  <CardWithShadow>
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

      <BildButton
        variant="contained"
        color="primary"
        disableElevation
        fullWidth
        size="large"
      >
        Ver mais
      </BildButton>
    </Paper>
  </CardWithShadow>

const styles = () => ({
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
    padding: '24px 24px 16px 24px'
  }
})

export default withStyles(styles)(Card)