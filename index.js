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
let fs = require('fs')
let path = require('path')
let img = path.join(__dirname, 'images')
fs.writeFile(`${img}/cat.js`, `'console.log("hii")'`, (err, data) => { })

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
const express = require('express') // import k liyye require ka use krtay hain
const app = express() // jb bhi express chaiye usay app ma save krna zroori ha 
const port = 3000
let public_directory_path =  path.join(__dirname,'public')
app.use(express.static(public_directory_path))
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
app.set('view engine','ejs')
app.get('', (req,res)=>{
res.render('/',{})
})
app.get('/*xyz', (req,res)=>{
res.render('/',{})
})

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
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})