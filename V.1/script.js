var life = 100;
var clean = 100;
var sleep = 100;
var fun = 100;
var social = 100;

function loop(time=2){
    var total = life + clean + sleep + fun + social;

    if (life <= 0 || clean <= 0 || sleep <= 0 || fun <= 0 || social <= 0){
        document.getElementById('pet').src="/Art/Cat1.png"
        document.getElementById('pet').innerHTML = 'Meow Died, pls restart';
    }else if (total > 400){
        document.getElementById('pet').src"/Art/Cat0.png";
    }else if (total > 300){
        document.getElementById('pet').src"/Art/Cat0.png";
    }else if (total > 200){
        document.getElementById('pet').src"/Art/Cat2.png";
    }else if (total > 100){
        document.getElementById('pet').src"/Art/Cat3.png";
    }else if (total > 50){
        document.getElementById('pet').src"/Art/Cat1.png";
    }

    life = life - parseInt(time);
    clean = clean - parseInt(time);
    sleep = sleep - parseInt(time);
    fun = fun - parseInt(time);
    social = social - parseInt(time);

    document.getElementById('life').innerHTML = life + '%';
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('fun').innerHTML = fun + '%';
    document.getElementById('social').innerHTML = social + '%';
}

function Start (){
    var temporizador = setInterval(loop, 1000);
}

function Eat(){
    life = 100
    document.getElementById('life').innerHTML = life + '%';
    document.getElementById('life').innerHTML = life + 'px';
}

function Showert(){
    clean = 100
    document.getElementById('clean').innerHTML = clean + '%';
    document.getElementById('clean').innerHTML = clean + 'px';
}

function Sleep(){
    sleep = 100
    document.getElementById('sleep').innerHTML = sleep + '%';
    document.getElementById('sleep').innerHTML = sleep + 'px';
}

function Play(){
    fun = 100
    document.getElementById('fun').innerHTML = fun + '%';
    document.getElementById('fun').innerHTML = fun + 'px';
}

function Meow(){
    social = 100
    document.getElementById('social').innerHTML = social + '%';
    document.getElementById('social').innerHTML = social + 'px';
}

Start();
