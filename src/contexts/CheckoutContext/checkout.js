import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getProducts } from 'services/cart'

export const CheckoutContext = createContext()

export const CheckoutProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [prices, setPrices] = useState({})
  const [isValidated, setIsValidated] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: '',
    cardNumber: '',
    cardDate: ''
  })

  useEffect(() => {
    const productsData = getProducts('5b15c4923100004a006f3c07')
    productsData
      .then((data) => {
        const { shippingTotal, subTotal, total, discount } = data
        setPrices({ shippingTotal, subTotal, total, discount })
        setProducts(data.items)
        setIsLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  const store = {
    products,
    prices,
    isLoading,
    isValidated,
    setIsValidated,
    setPaymentInfo,
    paymentInfo
  }

  return <CheckoutContext.Provider value={store}>{children}</CheckoutContext.Provider>
}

CheckoutProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export const useCheckoutContext = () => {
  const context = useContext(CheckoutContext)
  if (context === undefined) {
    throw new Error('useCheckoutContext must be used within a CheckoutProvider')
  }
  return context
}
