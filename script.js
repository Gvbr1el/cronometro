var h = 00;
var m = 00;
var s = 00;


function timer(){
    s++;

    if(s === 60){
        s = 00;
        m++;
    }
    else if(m === 60){
        m = 00;
        h++;
    }
    else if(h === 60){
        h = 00;
        m = 00;
        s = 00;
    }
    
    var p = document.getElementById("paragrafo");
    p.innerText = h + ":" + m + ":" + s
    p.style = "font-size: 3rem; text-align: center"
}

var inter;

function interval(){
    inter = setInterval(timer, 1000);
}

function stopInterval(){
    clearInterval(inter);
}