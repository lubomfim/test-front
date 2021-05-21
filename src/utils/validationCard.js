const valid = require('card-validator')

export const valCardNumber = (number) => {
  const numberValidation = valid.number(number)

  if (numberValidation.isValid) {
    return true
  } else {
    return false
  }
}

export const valCardDate = (date) => {
  const expirationDate = valid.expirationDate(date)

  if (expirationDate.isValid) {
    return true
  } else {
    return false
  }
}

export const valCardName = (name) => {
  const cardholderName = valid.cardholderName(name)

  if (cardholderName.isValid && name.length > 1) {
    return true
  } else {
    return false
  }
}

export const valCvv = (cvv) => {
  const cvvValitation = valid.cvv(cvv)

  if (cvvValitation.isValid) {
    return true
  } else {
    return false
  }
}
