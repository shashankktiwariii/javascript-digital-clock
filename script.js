// GitHub: https://github.com/shashank-3/javascript-digital-clock

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes();
    var s = date.getSeconds();

    if(h < 10){
        h = "0" + h;
    }

    if(m < 10){
        m = "0" + m;
    }

    if(s < 10){
        s = "0" + s;
    }

    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;


    var time = h + ":" + m + ":" + s;
    document.getElementById('MyClockDisplay').innerText = time;
    document.getElementById('MyClockDisplay').textContent = time;

    setTimeout(showTime, 1000)
}
showTime()

function showDate(){
    var today = new Date();
    var DD = today.getDate();
    var MM = today.getMonth()+1;
    var YYYY = today.getFullYear();
    var day = today.getDay();
    
    if(DD < 10){
        DD = "0" + DD;
    }

    if(MM < 10){
        MM = "0" + MM;
    }

    if(day ==  1){
        day = "Mon"
    }
    if(day ==  2){
        day = "Tue"
    }
    if(day ==  3){
        day = "Wed"
    }
    if(day ==  4){
        day = "Thu"
    }
    if(day ==  5){
        day = "Fri"
    }
    if(day ==  6){
        day = "Sat"
    }
    if(day ==  0){
        day = "Sun"
    }

    var date = DD +'-'+ MM + '-' + YYYY + " " + '('+day+')';
    document.getElementById('DateDay').innerText = date;
    setTimeout(showDate, 1000)
}
showDate()
