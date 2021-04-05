export const isValid = (name = '') => {
  if (name.trim().length > 0) {
    return name.trim() === 'Alex'
  }
  return false
}

export const sendData = (name, save) => {
  save(name)
}

export class FormHandler {
  constructor (validateFn, sendDataFn) {
    this.validateFn = validateFn;
    this.sendDataFn = sendDataFn;
  }

  onSubmit (name) {
    if (this.validateFn(name)) {
      this.sendDataFn(name)
    }
  }
}
