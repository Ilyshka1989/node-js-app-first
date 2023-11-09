const http = require("http");
http.createServer(function(request,response)
{response.end("Hello World");
}).listen(3000, "127.0.0.1", function(){
    console.log("Должно работать");
});

const greeting = require("./greeting");
let currentDate = new Date();
module.exports.currentDate = currentDate;
module.exports.getMessage = function(name){
    lethour = currentDate.getHours();
    if(hour > 16)
    return "Добрый вечер," + name;
    else if(hour > 10)
    return "Доброе день," + name;
else 
return "Доброе утро," + name;
}
const os = require("os");
let userName = os.userInfo().username;

console.log('Дата запроса: ${greeting.date}');
console.log(greeting.getMessage(userName));