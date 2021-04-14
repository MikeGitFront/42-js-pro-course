const { createValidation, createValidator, hasEmail, hasNoEmpty, hasAdult } = require('./task1')

describe('Validation', () => {
  describe('EmailValidation', () => {
    const emailValidation = createValidation(
      createValidator(
        hasNoEmpty,
        'Field is required.'
      ),
      createValidator(
        hasEmail,
        'Invalid email.',
      )
    )
    it('Should return value', () => {
      expect(emailValidation('')).toEqual(['Field is required.', 'Invalid email.'])
      expect(emailValidation('test@gmail.com')).toEqual(null)
    })
  })
  describe('AgeValidation', () => {
    const ageValidation = createValidation(
      createValidator(
        hasAdult,
        'Should be more or equal than 18',
      )
    )
    it('Should return correct value', () => {
      expect(ageValidation(17)).toEqual(['Should be more or equal than 18'])
      expect(ageValidation(25)).toEqual(null)
    })
  })
})
