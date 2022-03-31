export function flat1(arr, depth = 1) {
  while (arr.some((item) => Array.isArray(item)) && depth > 0) {
    arr = [].concat(...arr);
    depth--;
  }
  return arr;
}

export function flat2(arr, depth = 1) {
  let result = [];

  function _loop(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item) && depth > 0) {
        _loop(item, depth--);
      } else {
        result.push(item);
      }
    });
  }
  _loop(arr);
  return result;
}

export function flat3(arr, depth = 1) {
  return depth > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flat3(val, depth - 1) : val),
        []
      )
    : arr.slice();
}
