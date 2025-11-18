let peso =  Number(prompt("Digite seu peso"));
let altura =  Number(prompt("Digite sua altura"));

let imc = peso / (altura * altura);

console.log("seu IMC é: " + imc.toFixed(2));

let classificacao = "";

if(imc <18.5){
classificacao = "abaixo do peso"

}else if (imc < 25){

    classificacao = "peso normal";

}else if (imc < 30){
    classificacao = "sobre peso";

}else if (imc < 35){
    classificacao = "obesidade tipo 1";
    
}else if (imc < 40){
    classificacao = "obesidade tipo 2";
}else{
    classificacao = "obesidade tipo 3";
}

console.log( "classificacao: " +classificacao)