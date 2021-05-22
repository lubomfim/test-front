import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { CheckoutProvider } from 'contexts/CheckoutContext/checkout'

import Cart from 'pages/Cart'
import Payment from 'pages/Payment'
import Paid from 'pages/Paid'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <CheckoutProvider>
          <Route exact path="/checkout/cart" component={Cart} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/paid" component={Paid} />
          <Route path="*">
            <Redirect to="/checkout/cart" component={Cart} />
          </Route>
        </CheckoutProvider>
      </Switch>
    </Router>
  )
}

export default Routes
