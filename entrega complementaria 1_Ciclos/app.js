//for que devuelve el factorial de un numero
var numero = Number( prompt("Ingrese el numero que desea conocer su factorial") )
var resultado=1;

for(var i=1;i<=numero;i++){
resultado=resultado*i;

}
alert("el factorial de: " +numero + "es: " + resultado);


