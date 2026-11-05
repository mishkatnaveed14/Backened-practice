// const http = require("http");
// const url = "http://localhost:3000";

// http.createServer((req, res) => {

//   const url = new URL(req.url, url);
//   const a = Number(url.searchParms.get("a"));
//   const b = Number(url.searchParms.get("b"));
//   const op = url.searchParms.get("op");
//   let result = 0;
//   if (op === "+") {
//     result = a + b;
//   } else if (op === "-") {
//     result = a - b;
//   } else if (op === "*") {
//     result = a * b;
//   } else if (op === "/") {
//     result = a / b;
//   }else if (op === "%") {
//     result = a % b;
//   }
// res.writeHead(200, { "Content-Type": "text/html" });
// res.end(`
//     <h1> Node js calc </h1>
//     <form>
//     <input name="a" placeholder="First num" required >
//     <input name="op" placeholder="+ - / % *" required >
//     <input name="b" placeholder="second num" required >
//     <br><br>
//     <button>calculate</button>
//     </form>
//     <h2>Result : ${result}</h2>
//     `)
// }).listen(3000)


const { log } = require('console')
const http = require('http')
http.createServer((req,res)=>{
const url = new URL(req.url,'http://localhost:3000')
const year = Number(url.searchParams.get('year'))
let age = ''
let currentyear = new Date().getFullYear()
if (year) age = currentyear - age;
res.writeHead(200,{"content-type": "text/html"})
res.end(`
    <font face="Brush Script MT" color="skyBlue" size="20">Age calc:</font>
    <input name="year" placeholder="Enter your DOB" required>
    <button>Check age </button>
    </form>
    <h2> Your age : ${age}</h2>
    `)
}).listen(3000)
console.log("http://localhost:3000")