/* to get Time*/
function showTime() {
    var date = new Date()
    /* //other method of getting time
     var h = date.getHours()
     var m = date.getMinutes()
     var s = date.getSeconds()
     var session = "PM"
     if (h == 0) {
         h = 12;
     }
     if (h > 12) {
         h = h - 12;
         session = "AM";
     }
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
     var time = h + ":" + m + ":" + s + " " + session;*/
    var time = date.toLocaleTimeString()
    document.getElementById('time').innerHTML = time
}
showTime()

// to get Date
function showDate() {
    var date = new Date()
    /* // other method of getting the date
    var dt=date.getDate()
    var mon=date.getMonth()+1
    var yr=date.getFullYear()
    var todayDate= dt + "/" + mon + "/" + yr*/
    todayDate = date.toLocaleDateString()
    document.getElementById('date').innerHTML = todayDate

}
showDate()

// start clock function
function startClock() {
    timer = setInterval(showTime, 1000);
}
startClock()

// stop clock function
function stopClock() {
    clearInterval(timer);
}
stopClock()