// :)
const smartSearch = (array, value) => array.includes(value);

const notVerySmartSearch = (array, value) => array.filter((item) => item === value)

module.exports = {
  smartSearch,
  notVerySmartSearch,
}
