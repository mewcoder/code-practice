export function _forEach(fn, thisArg) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    fn.call(thisArg, arr[i], i, arr);
  }
}

export function _map(fn, thisArg) {
  let res = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    res.push(fn.call(thisArg, arr[i], i, arr));
  }
  return res;
}

export function _filter(fn, thisArg) {
  let res = [];
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      res.push(arr[i]);
    }
  }
  return res;
}

export function _every(fn, thisArg) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (!fn.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

export function _some(fn, thisArg) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

export function _find(fn, thisArg) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      return arr[i];
    }
  }
  return undefined;
}

export function _findIndex(fn, thisArg) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (fn.call(thisArg, arr[i], i, arr)) {
      return i;
    }
  }
  return undefined;
}
