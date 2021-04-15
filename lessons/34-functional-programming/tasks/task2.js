const memoizeResultCreator = (...params) => {
  const cache = {}
  const resultFn = params[params.length - 1]
  const otherFuncs = params.splice(-params.length, params.length - 1)
  return data => {
    const dataStr = JSON.stringify(data);
    let result = cache[dataStr];
    if (!(dataStr in cache)) {
      const elems = otherFuncs.map((func) => func(data));
      result = resultFn(...elems);
      cache[dataStr] = result;
    }
    return result;
  };
}




module.exports = {
  memoizeResultCreator,
}
