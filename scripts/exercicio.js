// Criando as variáveis

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("botao");
const resultadoSoma = document.getElementById("resultadoSoma");
const resultadoSub = document.getElementById("resultadoSub");
const resultadoMultipli = document.getElementById("resultadoMultipli");
const resultadoDiv = document.getElementById("resultadoDiv");

botao.addEventListener("click", () => {

    const n1 = Number(numero1.value);
    const n2 = Number(numero2.value);

    const soma = n1 + n2;
    const sub = n1 - n2;
    const mult = n1 * n2;
    const div = n1 / n2;

    resultadoSoma.textContent = "Resultado da soma: " + soma;
    resultadoSub.textContent = "Resultado da subtração: " + sub;
    resultadoMultipli.textContent = "Resultado da multiplicação: " + mult;
    resultadoDiv.textContent = "Resultado da divisão: " + div;

});


