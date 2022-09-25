// h1 
// .parrafito
// #par

const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const btnCalcularpar = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('form')

form.addEventListener(
    /*Evento a escuchar*/'submit',
    /*Evento a Ejercutar*/ sumarInputs//Sin parentesis porque el addEventListener pone solo los ()
    )

function sumarInputs(event){
    console.log(event)
   // event.preventDefault();
    const suma = calculo1.value+calculo2.value;
    pResult.innerText = "Resultado: " + suma;
}