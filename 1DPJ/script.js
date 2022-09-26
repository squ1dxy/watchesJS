
 
function watch() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    if(seconds < 10){
        seconds = `0${seconds}`
    }
    if(minutes < 10){
        minutes = `0${minutes}`
    }
    if(hours < 10){
        hours = `0${hours}`
    }
    return `${hours}:${minutes}:${seconds}`
}
let time = document.getElementById('time')

setInterval(function ()
    {time.innerHTML = watch()}, 1000)


