const list = [1, 2, 3, 4];
function test1() {
  list.forEach((item) => {
    if (item == 3) {
      return;
    }
    console.log(item);
  });
}

test1();
