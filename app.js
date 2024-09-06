const numeroBoton = document.getElementsByName("data-number");
const operadorBoton = document.getElementsByName("data-opera");
const igualBoton = document.getElementsByName('data-igual')[0];
const borrarBoton = document.getElementsByName('data-delete')[0];
var resultado=document.getElementById('resultado');
var opeActual="";
var opeAnterior="";
var operacion=undefined;

numeroBoton.forEach(function(boton){
    boton.addEventListener('click',function(){
        agregarNumero(boton.innerText);
    })
})

operadorBoton.forEach(function(boton){
    boton.addEventListener('click', function(){
        selecionarOperador(boton.innerText);
    })
})

igualBoton.addEventListener('click', function(){
    calcular();
    actualizar();
})

borrarBoton.addEventListener('click', function(){
    limpiar();
    actualizar();
})

function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString();
    actualizar(); 
}

function actualizar(){
    resultado.value = opeActual;   
}

function limpiar(){
    opeActual = "";
    opeAnterior = "";
    operacion=undefined;
}

function selecionarOperador(ope){
    if (opeActual == '')return;
    if(opeAnterior!==''){
        calcular();
    }
    operacion=ope.toString();
    opeAnterior=opeActual;
    opeActual='';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior);
    const actual = parseFloat(opeActual);
    if(isNaN(anterior)|| isNaN(actual))return;
    switch (operacion) {
        case '+':
            calculo=anterior+actual;
            break;
        case '-':
            calculo=anterior-actual;
            break;
        case '*':
            calculo=anterior*actual;
            break;
        case '/':
            calculo=anterior/actual;
            break;
        default:
            break;
    }
    opeActual= calculo;
    operacion=undefined;
    opeAnterior='';
}
