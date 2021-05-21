import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProductsProvider } from 'contexts/checkout'

import Cart from 'pages/Cart'
import Payment from 'pages/Payment'
import Paid from 'pages/Paid'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ProductsProvider>
          <Route exact path="/checkout/cart" component={Cart} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/paid" component={Paid} />
        </ProductsProvider>
      </Switch>
    </Router>
  )
}

export default Routes
