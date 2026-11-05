const http = require("http");
const url = "http://localhost:3000";

http.createserver((req, res) => {

  const url = new URL(req.url, url);
  const a = Number(url.searchParms.get("a"));
  const b = Number(url.searchParms.get("b"));
  const op = url.searchParms.get("op");
  let result = 0;
  if (op === "+") {
    result = a + b;
  } else if (op === "-") {
    result = a - b;
  } else if (op === "*") {
    result = a * b;
  } else if (op === "/") {
    result = a / b;
  }else if (op === "%") {
    result = a % b;
  }


});
