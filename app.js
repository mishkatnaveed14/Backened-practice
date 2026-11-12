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


// const { log } = require('console')
// const http = require('http')
// http.createServer((req,res)=>{
// const url = new URL(req.url,'http://localhost:3000')
// const year = Number(url.searchParams.get('year'))
// let age = ''
// let currentyear = new Date().getFullYear()
// if (year) age = currentyear - age;
// res.writeHead(200,{"content-type": "text/html"})
// res.end(`
//     <font face="Brush Script MT" color="skyBlue" size="20">Age calc:</font>
//     <input name="year" placeholder="Enter your DOB" required>
//     <button>Check age </button>
//     </form>
//     <h2> Your age : ${age}</h2>
//     `)
// }).listen(3000)
// console.log("http://localhost:3000")

// ============================
const agecheck = (req, res, next) => {
  const age = req.query.age;
  if (!age) {
    res.json({ message: "Age is required", sucess: false });
  } else if (age < 18) {
    res.json({ message: "Age is denied", sucess: false });
  } else {
    next();
  }
};
module.exports = agecheck

// starting of backened overveiw
// ========= node js working start ===========
// let {first,greet} = require('./app')
// console.log(first);
// greet(12344)
// console.log("hellooo");
// har choti channge k iye server ko restart kr ta ha bar bar tu phr ham nodmon ko use krtay hain

// 2 Modules directory name or file name  Global
// console.log("========", __dirname);  // ye bs folder tk ka path deta ha
// console.log("========", __filename); // ye file tk ka path btata ha
// CORE modules NON global FS
// FS Module file system (Non global) jis file ma chahiye waha se import krna padega
// WRITE FIles
// let fs = require('fs')
//  filename    ,   jo likhwana ha usay likhe gay

// fs.writeFileSync('hello.js',`console.log("hello world")`)  // ==> synchhronous ha
// fs.writeFile('abcd.js', `console.log("hello abcd")`,(err,data)=>{})  // ye asyncronous ha ye callback function leta ha or ye is ka syntax ha

// READ FILE
// let read = fs.readFileSync("abcd.js", 'utf-8')
// console.log(read);
// fs.readFile("abcd.js", 'utf-8', (err, data)=> console.log(data))

// fs.appendFileSync('abcd.js', `\nconsole.log("====> hello")`)  // ye append krta ha file ma\
// remove homework

// Core modulle non global path
// let fs = require('fs')
// let path = require('path')
// let img = path.join(__dirname, 'images')
// fs.writeFile(`${img}/cat.js`, `'console.log("hii")'`, (err, data) => { })

// for (let i = 0; 1 <= 5, i++) {
//     fs.writeFile(`${img}/file${i}.js`, `console.log("file${i}")`, (err, data) => { })
// }

// http module
// SERVER START

// let http = require('http')

// let server = http.createServer(
//     (req, res) => {
//         res.write('Server is running 1!')
//         res.write(`\n[{id:1,name:"ali"},{id:2,name:"ahmed"}]`)
//         res.end()
//     }

// ).listen(8000, () => {
//     console.log("server is running on port 8000")
// })

// ======================node js work end ================

// class - 02
// const express = require('express') // import k liyye require ka use krtay hain
// const agecheck = require('./middleware')
// const app = express() // jb bhi express chaiye usay app ma save krna zroori ha
// const port = 3000
// let public_directory_path =  path.join(__dirname,'public')
// app.use(express.static(public_directory_path))
// app.use(express.json())
// app.get('/', (req, res) => { // data ko show krne liye hota ha data hamari screen ma show ma ho
//     res.send('Hello World!')
// })
// app.get('/about', (req, res) => {
//     res.send({ message: 'Hello World! about page' })
// })
// let public_directory_path =  path.join(__dirname,'public')
// app.use(express.static(public_directory_path))
// app.get('',(req,res)=>{
// res.sendFile(`${public_directory_path}/html/index.html`)
// })
// app.get('/about',(req,res)=>{
// res.sendFile(`${public_directory_path}/html/about.html`)
// })
// app.get('/css',(req,res)=>{
// res.sendFile(`${public_directory_path}/css/index.css`)
// })
// app.get('/images',(req,res)=>{
// res.sendFile(`${public_directory_path}/css/index.css`)
// })

// -------------template engine EJS---------------------
// app.set('view engine','ejs')
// app.get('', (req,res)=>{
// res.render('/',{})
// })
// app.get('/*xyz', (req,res)=>{
// res.send(`<h1>404 page not found</h1>`)
// })

// app.get('/profile', (req,res)=>{
// // db query
// let user = {
// name:"mishkat",
// address: "garden",
// experience : {

// }
// }
// res.render('profile',{user})
// })

// -------------template engine EJS and ---------------------
//============== REST FULL API start====================

//============== REST FULL API end ====================

// app.get('/api/users' , (req,res)=>{
// res.status(200).json({name:"mishkat"})
// })

// app.get('/api/users/:id' , (req,res)=>{
// res.status(204).json({name:"mishkat"})
// })
// app.post('/api/users' , (req,res)=>{
// res.status(201).json({name:"mishkat"})
// })
// chain routes
// app.route('/api/users/:id')
// .get()
// .push()

///////////middle ware
// app.use(agecheck)
// app.get('',(req,res)=>{
// res.send("pass")
// })

// app.listen(port, () => {
//     console.log(`server is running on ${port}`)
// })

// const http = require("http");
// // const url = "http://localhost:3000";

// http.createServer((req, res) => {

//   const url = new URL(req.url, "http://localhost:3000");
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

// start mongoose
import mongoose from "mongoose";
import express from "express";
const app = express();
const port = 3000;
app.use(express.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("error connecting to mongodb", err);
  });
//////////////schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
// model == collection name
const User = mongoose.model("User", userSchema);
// create user --- signup
app.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;
   let pswd = await bcrypt.hash(password, 12);
   let existingUser = await User.findOne({ email: email });
   if (existingUser) {
     return res.status(400).json({ message: "User already exists" });
   }
    const user = new User({ ...req.body, password: pswd });
    await user.save();
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Error creating user", error: err.message });
  }
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
