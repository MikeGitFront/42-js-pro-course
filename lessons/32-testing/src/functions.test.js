const { isValid, sendData, FormHandler } = require('./functions')

describe('isValid: ', () => {
    test('should return Alex', () => {
        expect(isValid('Alex')).toEqual(true)
    })

    test('should return false', () => {
        expect(isValid()).toEqual(false)
        expect(isValid('Hello')).toEqual(false)
    })
})

describe('sendData: ', () => {
    test('should return undefined', () => {
        const func = jest.fn()
        sendData('awdawd', func)
        expect(func).toHaveBeenCalledWith('awdawd')
    })

    test('should return true', () => {
        const myToUpperCase = (value) => value.toUpperCase()

        expect(isValid('Alex', myToUpperCase)).toEqual(true)
    })
})

describe('Class FormHandler: ', () => {

    test('should send data if we got name', () => {
        const trueFunc = jest.fn(() => true)
        const func = jest.fn()

        const handler = new FormHandler(trueFunc, func)
        handler.onSubmit('name')

        expect(trueFunc).toHaveBeenCalledWith('name')
        expect(func).toHaveBeenCalledWith('name')
    })

    test('should not send data without any name ', () => {
        const falseFunc = jest.fn(() => false)
        const func = jest.fn()

        const handler = new FormHandler(falseFunc, func)
        handler.onSubmit('name')

        expect(falseFunc).toHaveBeenCalledWith('name')
        expect(func).not.toHaveBeenCalled()
    })
})