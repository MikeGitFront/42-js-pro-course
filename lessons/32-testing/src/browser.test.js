const { createFormHtml } = require('./browser')
const { isValid, sendData, FormHandler } = require('./functions')


test('Check if createFormHtml runs ', () => {
    createFormHtml(document)
    const form = document.querySelector('form')
    const input = document.querySelector('input')
    const button = document.querySelector('button')
    expect(!!(form)).toBeTruthy()
    expect(!!(input)).toBeTruthy()
    expect(!!(button)).toBeTruthy()
})

test('Check if createFormHtml runs ', () => {
})

jest.mock("./functions.js");

describe("formHandler", () => {
    it("Form handler is created", () => {
        expect(FormHandler).toHaveBeenCalledTimes(1);
        expect(FormHandler.mock.calls[0].length).toBe(2);
        expect(FormHandler.mock.calls[0][0]).toBe(isValid);
        const arg = FormHandler.mock.calls[0][1];
        arg("test");
        expect(sendData.mock.calls[0].length).toBe(2);
        expect(sendData.mock.calls[0][0]).toBe("test");
    });
});

