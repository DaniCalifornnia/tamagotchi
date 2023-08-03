
var life = 100;
var clean = 100;
var sleep = 100;
var fun = 100;
var social = 100;


function Loop(time = 2){

  var total = life + clean + sleep + fun + social;


  if(life <= 0 || clean <= 0 || sleep <= 0 || fun <= 0 || social <= 0){
     document.getElementById("pet").src="./Art/Cat1.gif";
     document.getElementById('message').innerHTML = 'Meow Died, pls refresh';
  }
  else if(total > 400){
     document.getElementById("pet").src="./Art/Cat0.gif";
  }
  else if(total > 300){
     document.getElementById("pet").src="./Art/Cat0.gif";
  }
  else if(total > 200){
     document.getElementById("pet").src="./Art/Cat2.gif";
  }
  else if(total > 100){
     document.getElementById("pet").src="./Art/Cat3.gif";
  }
  else if(total > 50){
     document.getElementById("pet").src="./Art/Cat1.gif";
  }

  life = life - parseInt(time);
  clean = clean - parseInt(time);
  sleep = sleep - parseInt(time);
  fun = fun - parseInt(time);
  social = social - parseInt(time);


  document.getElementById('life').style.width = life + 'px';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('sleep').style.width = sleep + 'px';
  document.getElementById('fun').style.width = fun + 'px';
  document.getElementById('social').style.width = social + 'px';

  
  document.getElementById('life').innerHTML = life + '%';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('sleep').innerHTML = sleep + '%';
  document.getElementById('fun').innerHTML = fun + '%';
  document.getElementById('social').innerHTML = social + '%';
}


function Start(){
  var temporizador = setInterval(Loop, 1000);
}


function Eat(){
  fome = 100;
  document.getElementById('fome').innerHTML = fome + '%';
  document.getElementById('fome').style.width = fome + 'px';
}


function Shower(){
  higiene = 100;
  document.getElementById('higiene').innerHTML = higiene + '%';
  document.getElementById('higiene').style.width = higiene + 'px';
}


function Sleep(){
  sono = 100;
  document.getElementById('sono').innerHTML = sono + '%';
  document.getElementById('sono').style.width = sono + 'px';
}


function Play(){
  diversao = 100;
  document.getElementById('diversao').innerHTML = diversao + '%';
  document.getElementById('diversao').style.width = diversao + 'px';
}


function Meow(){
  social = 100;
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('social').style.width = social + 'px';
}


Start();