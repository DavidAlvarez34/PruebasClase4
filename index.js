/*function llamada(){
    console.log("Hola Mundo");
}
//funcion que llama a otra funcion
function llamadora(call){
    console.log("Dentro de esta funcion llamamos nuestro callback");
    call();//ejecuta la funcion llamada
}
llamadora(llamada);*/
//argumentos de funciones
console.log("Este es un texto va primero");
//asincronia- causa y efecto casualidad
setTimeout(()=>{
    console.log("Este texto va segundo");
},6000);
setTimeout(()=>{
    console.log("Este texto va tercero");
},2000);
console.log("Este va cuarto");
//cascada