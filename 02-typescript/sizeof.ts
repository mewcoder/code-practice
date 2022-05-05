function sizeof(obj: any): any {
  const type = typeof obj;
  switch (type) {
    case "string":
      return obj.length * 2;
    case "boolean":
      return 4;
    case "number":
      return 8;
    case "object": {
      if (Array.isArray(obj)) {
        return obj.map(sizeof).reduce((a, c) => a + c);
      } else {
        return sizeofObject(obj);
      }
    }
  }
}

const set = new WeakSet();

function sizeofObject(obj: any) {
  if (obj === null) return 0;
  let bytes = 0;
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (set.has(obj[key])) {
        continue;
      }
      set.add(obj[key]);
    }
    bytes += sizeof(key);
    bytes += sizeof(obj[key]);
  }
  return bytes;
}

const data = {
  a: 111,
  b: "cccc",
  c: false,
};

console.log(sizeof(data));
