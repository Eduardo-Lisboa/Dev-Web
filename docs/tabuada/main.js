const button = document.getElementById("button");
const tabuada = document.getElementById("tabuada");

button.addEventListener("click", () => {
    tabuada.innerHTML = ""; // Limpa o conteúdo da div
    const number = document.getElementById("number").value;
    if (number == "") {
        alert("Digite um número!");
        return;
    }
    for (let i = 1; i <= 10; i++) {
        tabuada.innerHTML += `${number} x ${i} = ${number * i} <br>`;
    }
});

let contador = 0;

const buttonClick = document.getElementById("clique-aqui");
buttonClick.addEventListener("click", () => {
    const numeroClicado = document.getElementById("clique-button");
    console.log(
        "🚀 ~ file: main.js:19 ~ buttonClick.addEventListener ~ numeroClicado:",
        numeroClicado
    );

    numeroClicado.innerHTML = `Esse botaão recebeu ${contador++} cliquies`;
});

const botaoSorteador = document.getElementById("botao-sorteador");
botaoSorteador.addEventListener("click", (e) => {
    const primeiroNumero = document.getElementById("primeiro-numero").value;
    const segundoNumero = document.getElementById("segundo-numero").value;

    let numero1 = parseInt(primeiroNumero);
    let numero2 = parseInt(segundoNumero);

    if (numero2 < numero1 || numero1 == "" || numero2 == "") {
        alert("O segundo número deve ser maior que o primeiro!");
        return;
    }

    const numeroSorteado = document.getElementById("numero-sorteado");
    numeroSorteado.innerHTML = Math.floor(Math.random(numero1) * numero2) + 1;
});
