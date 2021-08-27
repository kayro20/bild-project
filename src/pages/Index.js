import React, { useEffect, useState } from 'react'

import { withStyles } from '@material-ui/core'

import { apiService } from '../services/httpService'
import Loading from '../components/ui/Loading'
import Card from '../components/Card/Index'
import {
  isEmpty,
  getListInfo,
  hasValidBusinessRules
} from '../models/utils'

const Index = ({ classes }) => {
  const [productsList, setProductsList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProductsList()
  }, [])

  const getProductsList = async () => {
    setLoading(true)

    try {
      const { data } = await apiService().get('products.json')
      setProductsList(data.products)
    }
    catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  return (
    <div className={classes.Index_root}>
      {
        loading
          ? <Loading />
          : !isEmpty(productsList) && productsList.map(product =>
            hasValidBusinessRules(product)
            && <div key={product.name} className={classes.Index_wrapper}>
              <Card info={product} listInfo={getListInfo(product)} />
            </div>
          )
      }
    </div>
  )
}

const styles = () => ({
  Index_root: {
    padding: '10px 20px'
  },
  Index_wrapper: {
    display: 'flex',
    justifyContent: 'center',
    padding: 20
  }
})

export default withStyles(styles)(Index);
