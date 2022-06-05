//for que devuelve el factorial de un numero
/*var numero = Number( prompt("Ingrese el numero que desea conocer su factorial") )
var resultado=1;

for(var i=1;i<=numero;i++){
resultado=resultado*i;

}
alert("el factorial de: " +numero + "es: " + resultado);

*/

function calculadora (){
    //valor contra el peso argentino ($ARS)
let valor = parseInt(document.getElementById("pesos").value);
var select = document.getElementById('select').value;
let bitcoin = 5800000;
let ethereum = 360000;
let solana = 7800;
let usdt = 200;
let resultado = 0;


if(select =="Bitcoin"){
    resultado= valor/bitcoin;
    alert("Compraste " + resultado + " Bitcoin!")
}else if(select=="Ethereum"){
    resultado= valor/ethereum;
    alert("Compraste " + resultado + " Ethereum!")
} else if(select=="Binance"){
    resultado= valor/b;
    alert("Compraste " + resultado + " Ethereum!")
} else if(select=="Solana"){
    resultado= valor/solana;
    alert("Compraste " + resultado + " Solana!")
} else if(select=="USDT"){
    resultado= valor/usdt;
    alert("Compraste " + resultado + " USDT!")
}

else{
    alert("Los Campos estan vacios!")
}

}
