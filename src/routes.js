import React, { Suspense, lazy } from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Loading from './components/ui/Loading'

const Index = lazy(() => import('./pages/Index'))

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Routes
