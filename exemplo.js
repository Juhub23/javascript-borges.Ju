// //Alert - Apresenta uma mensagem na tela
// window.alert(" Ola turma do Borges")
// //confim - pergunta ok/ cancela (retorna um true ou fallse)
// window.confirm("O jonas vai Casar!")
// //prompt - Pega o texto da tela
// window.prompt("Qual o seu nome?")

// comentario em linha

/*
comentario em texto
*/

// console.log("Multimidia")

// let nome = prompt("informe seu nome: ")
// console.log("Bem vindo!" + nome)

// let numero1 =  Number. parseInt (prompt("Digite seu primeiro numero"))
// let numero2 = Number. parseInt (prompt("Digite segundo numero"))

// let resultado = numero1 + numero2

// let numero1 =  Number. parseFloat(prompt("Digite seu primeiro numero"))
// let numero2 = Number. parseFloat(prompt("Digite segundo numero"))

// let resultado = numero1 + numero2

// console.log (resultado)

let idade = window.prompt("Qual sua idade?")

if (idade >= 18){
    console. log("Maior de idade! Da-lheee")
}else{
    console. log("Voce é menor de idade!")
}

switch (idade) {
    case "18":
         console. log("Maior de idade!")
        break;

    case "27":
        console. log ("Esta perto dos 30")
        break;

    default:
        console. log ("Nada a dizer")
        break;
}