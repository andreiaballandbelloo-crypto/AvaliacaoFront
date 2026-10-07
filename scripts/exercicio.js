// Criando as variáveis

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botaoSomar = document.getElementById("botaoSomar");
const resultadoSoma = document.getElementById("resultadoSoma");
// const resultadoSub = document.getElementById("resultadoSub");
// const resultadoMult = document.getElementById("resultadoMult");
// const resultadoDiv = document.getElementById("resultadoDiv");

botaoSomar.addEventListener("click", () => {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const soma = n1 + n2;
    // const sub = n1 - n2;
    // const mult = n1 * n2;
    // const div = n1 / n2;

    resultadoSoma.textContent = "Resultado da soma: " + soma;
    // resultadoSub.textContent = "Resultado da subtração: " + sub;
    // resultadoMult.textContent = "Resultado da multiplicação: " + mult;
    // resultadoDiv.textContent = "Resultado da divisão: " + div;

});


// Exercício comentado porque aquelas partes não funcionaram rs

