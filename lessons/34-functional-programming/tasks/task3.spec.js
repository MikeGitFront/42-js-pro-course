const { compose, withProps, branch } = require('./task3')

describe('Composing', () => {
  const logFunction = compose(
    branch(
      ({ isShort }) => isShort === true,
      withProps((props) => ({
        time: props.time,
        message: props.message,
      })),
      withProps((props) => ({
        ...props,
        logLevel: 'full',
      }))
    )
  )

  it('Should apply left or right branch', () => {
    const result = logFunction({ isShort: true, time: new Date().getTime(), message: 'Short message' })
    expect(result).toHaveProperty('time')
    expect(result).toHaveProperty('message')
    expect(result).not.toHaveProperty('logLevel')
    const result2 = logFunction({ isShort: false, time: new Date().getTime(), message: 'Short message' })
    expect(result2).toHaveProperty('logLevel')
  })
})
