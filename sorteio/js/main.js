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
