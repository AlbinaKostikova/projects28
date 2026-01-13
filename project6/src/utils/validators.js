export const isEmailValid = email => email.includes('@')
export const isRequired = value => value.trim() !== ''
export const minLength = (value, len) => value.length >= len