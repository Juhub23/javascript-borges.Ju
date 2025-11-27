
let secao = document.getElementsByName("section");
let novoParagrafo = document.createElement("p"); //cria um elemento no meu HTML
let formularioElemento = document.getElementById("formulario");
let labelElemento = document.getElementById("label");

novoParagrafo.textContent = "Paragrafo criado via JS"; //poe um conteudo novo non 'p'

// secao[0].appendChild(novoParagrafo);
document.body.appendChild(novoParagrafo);

//Remover tag Label
formularioElemento.removeChild(labelElemento);