// console.log("hello world");

//sum of two number 
// let num1=10;
// let num2=20;
// let sum=num1+num2;
// console.log(sum);

// import fs from "fs";
// fs.writeFileSync("sample.txt","hello world");
// console.log("file created");

// import os from "os";
// console.log(os.platform());

// import http from "http";

// const server=http.createServer((req,res)=>{
//     res.end("hello node js server ");
// });
// server.listen(3000);
// console.log("server is running on http://localhost:3000");

import http from "http";
const server=http.createServer((req,res)=>{
    res.end("hellllo guys");
});

server.listen(5000);
console.log("server is running at http://localhost:5000");
