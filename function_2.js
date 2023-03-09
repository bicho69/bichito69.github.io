/**
document.getElementById('boton').onclick = function (){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos Probando Nuestro Pimer Evento en JS";
}
*/

/**document.addEventListener('click', function(){
    console.log("Hola Mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento"
});
*/
/**
document.getElementById('boton').addEventListener('click', function() { 
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos Probando Nuestro Pimer Evento en JS";
 });
*/
 document.getElementById('boton_color').addEventListener('click', function() { 
     document.body.style.backgroundColor = '#FF9900';
 });
 

 document.getElementById('boton').addEventListener('click', function(){
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos Probando Nuestro Pimer Evento en JS";


 });

 document.getElementById('color_default').addEventListener('click', function() { 
    document.body.style.backgroundColor = '#FF00CC';
});

document.getElementById('boton_ocultar').addEventListener('click', function() { 
    document.getElementById('demo').style.display = 'none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++ ) {
    collection[i].style.backgroundColor = "green";
}