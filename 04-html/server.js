const express = require("express");
const app = express();

/**
 * 前端请求参数发送一个回调函数函数名
 * 后端返回这个函数的调用，并将数据放在该函数调用的参数上
 */
app.get("/say", (req, res) => {
  console.log(req.query);
  let { num, cb } = req.query;
  res.end(`${cb}('test')`);
});
app.listen(3000);
