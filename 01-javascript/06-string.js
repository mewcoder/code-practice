/**
 *
 * @ 字符串倒序
 * @param {*} str
 * @returns
 */
export function reverseString(str) {
  // return str.split('').reverse().join('')
  // return [...str].reverse().join('')
  return Array.from(str).reverse().join("");
}



export function padStart(str, len, ch) {
  len = len >> 0; //floor if number or convert non-number to 0;
  ch = String((typeof ch !== 'undefined' ? ch : ' '));
  if (str.length > len) {
    return String(str);
  }
  else {
    len = len - str.length;
    if (len > ch.length) {
      ch += ch.repeat(len / ch.length); //append to original to ensure we are longer than needed
    }
    return ch.slice(0, len) + String(str);
  }
};

export function repeat(str, count) {
  str = String(str);
  if (str.length * count >= 1 << 28) {
    throw new RangeError('repeat count must not overflow maximum string size');

  }
  let rpt = '';
  for (; ;) {
    if ((count & 1) == 1) {
      rpt += str;
    }
    count >>>= 1;
    if (count == 0) {
      break;
    }
    str += str;
  }
  return rpt;
}

