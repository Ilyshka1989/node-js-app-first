const http = require("http");
let messange = "working"
http.createServer(function(request,response)
{   console.log(messange);
    response.end(messange)
}).listen(3000, "127.0.0.1", ()=>{
  console.log( "работать") ; 
});

const os = require("os");
const greeting = require ("./greeting");
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
const User = require("./user");
let ilya = new User("Ilyshka", 34);
ilya.sayHi();
const welcome = require("./welcome");
const { response } = require("express");
welcome.getEveningMessage();
welcome.getMorningMessage();
global.name = "Ilyshka";
global.console.log(date);
console.log(greeting.getMessage());
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log("nodePath:" + nodePath);
console.log("appPath:" + appPath);
console.log();
console.log("name:" + name);
console.log("age:" + age);