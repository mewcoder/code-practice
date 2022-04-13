export function isValid(s) {
  const stack = [];
  const left = ["(", "[", "{"];
  const right = [")", "]", "}"];
  for (let i = 0; i < s.length; i++) {
    if (left.indexOf(s[i]) > -1) {
      stack.push(s[i]);
    } else {
      if (left.indexOf(stack[stack.length - 1]) === right.indexOf(s[i])) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
