let numero1 =  Number. parseFloat(prompt("Digite a nota de portugues"))

let numero2 = Number. parseFloat(prompt("Digite a nota de matematica"))

let numero3 =  Number. parseFloat(prompt("Digite a nota de geografia"))

let numero4 = Number. parseFloat(prompt("Digite a nota de historia"))


let soma = numero1 + numero2 + numero3 + numero4

console. log (soma)

let media = (soma / 4)

console.log(media)

if (media >= 7){
    console.log("aprovado")
}

else if(media >5 && media <7){
    console. log("Recuperação")
}

else{
    console. log("Reprovada")
}