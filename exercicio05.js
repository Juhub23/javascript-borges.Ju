let numero1 =  Number. parseFloat(prompt("Digite seu primeiro numero"))

let numero2 = Number. parseFloat(prompt("Digite segundo numero"))

let numero3 =  Number. parseFloat(prompt("Digite o terceiro numero"))

if(numero1 > numero2 && numero2 > numero3){
    console.log("os numeros estão em ordem crescente", numero1 , numero2 , numero3);
}

else{
    console.log("os numeros não estão em ordem crescente");
    
}
