

document.getElementById('sumar').addEventListener('click', function(){
    let numeroA= document.getEventById('numero1').value;
    console.log('el valor de numero A es:'+numeroA);
    let numeroB= document.getEventById('numero2').value;
    console.log('el valor de numero B es:'+numeroB);

    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log('el valor de la suma de ambos numeros es:'+ resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorresultado').style.display ='block'

});

function sumar(a,b){
    return a + b;
}