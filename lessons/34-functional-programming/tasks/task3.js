const compose = (...instructions) => (props) => instructions.reduce((acc, func) => func(acc), props)
const withProps = (func) => (props) => Object.assign({}, func(props))
const branch = (cond, fullFunc, shortFunc) => (x) => cond(x) ? fullFunc(x) : shortFunc(x)

module.exports = {
  compose,
  withProps,
  branch,
}
