let opcaoescolhida = 0;

do {
    opcaoescolhida = parseInt(prompt(`
        =====MENU DE EXERCICIO=====

        Digite o numero de uma das opções:
        
        0 - Sair
        1 - Login
        2 - IMC
        3 - Par ou impar
        4 - média do aluno 
        5 - Número crescente

        ===========================
        `));

    switch (opcaoescolhida) {
        case 0:
            alert("Volte sempre...");
            break;

        case 1:
            login();
            break;

        case 2:
            calculoIMC();
            break;

        case 3:
            verificarNumer();
            break;

        case 4:
            calculoMediaAluno();
            break;

        case 5:
            verivicarSequencia();
            break;

        default:
            alert("Opção ERRADAAAAA!! Escolha outro número.");
            break;
    }
}
while (opcaoescolhida != 0);

function login() {

    let nome = prompt("Informe o nome de usuario: ")
    console.log("Bem vindo!" + nome)

    let senha = window.prompt("Digite sua senha")

    if (nome == "adimin" && senha == "senha123") {
        console.log("login bem sucedido")
    } else {
        console.log("algo esta incorreto")
    }

    alert("Login realizado com sucesso!")
}
function calculoIMC() {

    let peso = Number(prompt("Digite seu peso"));
    let altura = Number(prompt("Digite sua altura"));

    let imc = peso / (altura * altura);

    console.log("seu IMC é: " + imc.toFixed(2));

    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo do peso"

    } else if (imc < 25) {

        classificacao = "peso normal";

    } else if (imc < 30) {
        classificacao = "sobre peso";

    } else if (imc < 35) {
        classificacao = "obesidade tipo 1";

    } else if (imc < 40) {
        classificacao = "obesidade tipo 2";
    } else {
        classificacao = "obesidade tipo 3";
    }

    console.log("classificacao: " + classificacao)

}

function verificarNumer() {

let numero = window.prompt("Insira um numero")

if(numero % 2 === 0){
    console. log("Ele é par")
}else{
    console. log ("Ele é impar")
}

}

function calculoMediaAluno() {

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

}

function verivicarSequencia() {

let numero1 =  Number. parseFloat(prompt("Digite seu primeiro numero"))

let numero2 = Number. parseFloat(prompt("Digite segundo numero"))

let numero3 =  Number. parseFloat(prompt("Digite o terceiro numero"))

if(numero1 > numero2 && numero2 > numero3){
    console.log("os numeros estão em ordem crescente", numero1 , numero2 , numero3);
}

else{
    console.log("os numeros não estão em ordem crescente");
    
}


}