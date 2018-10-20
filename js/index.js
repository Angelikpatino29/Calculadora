var countPoints = 0;
var Calculadora = {
  display: document.getElementById('display'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  cero: document.getElementById('0'),
  on: document.getElementById('on'),
  sign: document.getElementById('sign'),
  mas: document.getElementById('mas'),
  menos: document.getElementById('menos'),
  por: document.getElementById('por'),
  dividido: document.getElementById('dividido'),
  igual: document.getElementById('igual'),
  punto: document.getElementById('punto'),
  tecla: document.querySelectorAll('.tecla'),
  raiz: document.getElementById('raiz'),
  aux: 0,
  valorpantalla: "0",
  operandoa: 0,
  operandob: 0,
  operacion: "",
  suma: 0,
  resta: 0,
  mult: 0,
  division: 0,
  init: function() {
    this.eventos()
  },
  eventos: function() {
    this.uno.addEventListener('click', function() {
      Calculadora.mostrar("1")
    });
    this.uno.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.uno.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.dos.addEventListener('click', function() {
      Calculadora.mostrar("2")
    });
    this.dos.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.dos.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.tres.addEventListener('click', function() {
      Calculadora.mostrar("3")
    });
    this.tres.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.tres.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.cuatro.addEventListener('click', function() {
      Calculadora.mostrar("4")
    });
    this.cuatro.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.cuatro.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.cinco.addEventListener('click', function() {
      Calculadora.mostrar("5")
    });
    this.cinco.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.cinco.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.seis.addEventListener('click', function() {
      Calculadora.mostrar("6")
    });
    this.seis.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.seis.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.siete.addEventListener('click', function() {
      Calculadora.mostrar("7")
    });
    this.siete.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.siete.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.ocho.addEventListener('click', function() {
      Calculadora.mostrar("8")
    });
    this.ocho.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.ocho.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.nueve.addEventListener('click', function() {
      Calculadora.mostrar("9")
    });
    this.nueve.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.nueve.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.cero.addEventListener('click', function() {
      Calculadora.mostrar("0")
    });
    this.cero.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.cero.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.on.addEventListener('click', function() {
      display.innerHTML = 0;
      countPoints = 0;
    });
    this.on.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.on.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });

    this.punto.addEventListener('click', function() {
      Calculadora.ingresoDecimal()
    });
    this.punto.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.punto.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.sign.addEventListener('click', function() {
      maso = display.innerHTML
      maso = parseInt(maso)
      display.innerHTML *= -1
    });
    this.sign.addEventListener('mousedown', function() {
      this.style.transform="scale(0.9)"
    });
    this.sign.addEventListener('mouseup', function() {
      this.style.transform="scale(1)"
    });
    this.mas.addEventListener('click', function(){
     operandoa = display.textContent;
     operacion = "+";
     limpiar();
 });
 this.mas.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.mas.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
 this.raiz.addEventListener('click', function() {
   Calculadora.mostrar("raiz")
 });
 this.raiz.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.raiz.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
 this.menos.addEventListener('click', function(){
     operandoa = display.textContent;
     operacion = "-";
     limpiar();
 });
 this.menos.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.menos.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
 this.por.addEventListener('click', function(){
     operandoa = display.textContent;
     operacion = "*";
     limpiar();
 });
 this.por.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.por.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
 this.dividido.addEventListener('click', function(e){
     operandoa = display.textContent;
     operacion = "/";
     limpiar();
 });
 this.dividido.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.dividido.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
 document.getElementById('igual').addEventListener('click', function(e){
     operandob = display.textContent;
     resolver();
 });
 this.igual.addEventListener('mousedown', function() {
   this.style.transform="scale(0.9)"
 });
 this.igual.addEventListener('mouseup', function() {
   this.style.transform="scale(1)"
 });
  },
  mostrar: function(num) {
    if (display.innerHTML.substring(0) == "0") {
      display.innerHTML = display.innerHTML.substring(1)
    }
    display.innerHTML += num
    display.innerHTML = display.innerHTML.substring(0, 8)
  },

  ingresoDecimal: function(){
    if (countPoints < 1) {
this.display.innerHTML = this.display.innerHTML + "."
countPoints = 1;
}
    //if(this.valorpantalla.indexOf(".")== -1){
      //if (this.valorpantalla == "") {
        //this.valorpantalla = this.valorpantalla + "0.";
      //} else {
        //this.valorpantalla = this.valorpantalla + ".";
      //}
      //this.updatepantalla();
    //}
  },
  //updatepantalla: function(){
    //this.display.innerHTML = this.valorpantalla;
  //}
}
function limpiar(){
  display.textContent = "";
}
function resetear(){
display.textContent = "";
operandoa = 0;
operandob = 0;
operacion = "";
}
function resolver(){
var res = 0;
switch(operacion){
  case "+":
    res = parseFloat(operandoa) + parseFloat(operandob);
    break;
  case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
  case "*":
    res = parseFloat(operandoa) * parseFloat(operandob);
    break;
  case "/":
    res = parseFloat(operandoa) / parseFloat(operandob);
    break;
}
resetear();
display.textContent = res;
}

Calculadora.init()
