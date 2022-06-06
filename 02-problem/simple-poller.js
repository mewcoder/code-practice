let time = null;
const list = [];
const simplePoller = function (queryFn, callback) {
  let interval = 1000;
  list.push(queryFn());
  console.log(list);
  const loop = () => {
    const res = list.shift();
    if (!res) {
      console.log("queryFn:", res, "interval:", interval);
      interval = interval * 1.5;
      setTimeout(() => {
        loop();
      }, interval);
    } else {
      callback();
      console.log("end");
      return;
    }
  };
  if (time) {
    clearTimeout(time);
  }
  time = setTimeout(() => {
    console.log("start");
    loop();
  }, interval);
};

const a = () => false;
const b = () => false;
const c = () => true;

simplePoller(a, () => {
  console.log("a");
});
simplePoller(b, () => {
  console.log("b");
});
simplePoller(c, () => {
  console.log("c");
});
