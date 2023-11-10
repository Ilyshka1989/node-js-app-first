const http = require("http");
http.createServer(function(request,response)
{response.end("Hello World");
}).listen(3000, "127.0.0.1", function(){
    console.log("Должно работать");

});

const os = require("os");
const greeting = require ("./greeting")
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
