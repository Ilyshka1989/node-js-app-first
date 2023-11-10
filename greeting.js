console.log("greeting module")
let currentDate = new Date();
module.exports.currentDate = currentDate;
module.exports.getMessage = function(name){
    let hour = currentDate.getHours();
    if(hour > 16)
    return "Добрый вечер," + name;
    else if(hour > 10)
    return "Доброе день," + name;
else 
return "Доброе утро," + name;
}