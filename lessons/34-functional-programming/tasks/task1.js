const createValidation = (...validators) => {
  const func = (value) => {
    let answer = []
    for (let validator of validators) {
      answer.push(validator(value))
    }
    return answer.includes(null) ? null : answer
  }
  return func
}

const createValidator = (validationFunc, expression) => {
  const createdFunc = (value) => validationFunc(value, expression)
  return createdFunc
}

const hasEmail = (email, answer) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : answer
}

const hasNoEmpty = (expression, answer) => {
  return expression.trim() !== '' ? null : answer
}

const hasAdult = (age, answer) => {
  return age >= 18 ? null : answer
}

module.exports = {
  createValidation,
  createValidator,
  hasEmail,
  hasNoEmpty,
  hasAdult,
}
