let elementosPorClass = document.getElementsByClassName("texto");
let elementoPorID= document.getElementById("formulario");

console.log(elementosPorClass);
console.log(elementosPorClass[0]);
console.log(elementoPorID);


let elementoTag = document.getElementsByTagName("p"); 
console.log(elementoTag);

elementoTag[0]. textContent = "Sentimos falta do Tadeu" //modifica o conteudo do elemento

console.log(elementoTag[0].textContent);

elementoTag[0].style.color = "red";
elementoTag[0].style.fontSize = "30px";

//exiba o 2 elemento da variavel elementos

//crie uma variavel que tenha o valor de um elemento buscando pelo nome da tag

//acesse uma propriedade innerText da variavel elementoPorTag(é uma array, vão ter que acessar a posição dp elemento) e exiba no console.log

//acese a prpriedade style.color e atribui (=) uma cor red em formato de string para a posicao 0 da variavel