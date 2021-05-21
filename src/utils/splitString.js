export const splitString = (string, length, index) => {
  return string.length > length ? string.split('-')[index] : string
}
