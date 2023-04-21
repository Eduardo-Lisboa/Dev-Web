const bottonSubimit = document.getElementById("submit");

bottonSubimit.addEventListener("click", (e) => {
    let nomeAluno = document.getElementById("nome-aluno").value;
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;
    let nota4 = document.getElementById("nota4").value;

    let result = document.getElementById("result");
    console.log(
        "🚀 ~ file: main.js:11 ~ bottonSubimit.addEventListener ~ result:",
        result
    );

    let value1 = parseInt(nota1);
    let value2 = parseInt(nota2);
    let value3 = parseInt(nota3);
    let value4 = parseInt(nota4);

    let media = (value1 + value2 + value3 + value4) / 4;
    console.log(
        "🚀 ~ file: main.js:10 ~ bottonSubimit.addEventListener ~ media:",
        media
    );
    console.log(nomeAluno);

    result.innerHTML = `O aluno ${nomeAluno} foi aprovado com média ${media}`;

    if (media > 6) {
        result.innerHTML = `O aluno ${nomeAluno} foi aprovado com média ${media}`;
        document.getElementById("result").style.backgroundColor = "green";
    } else if (media <= 2) {
        result.innerHTML = `O aluno ${nomeAluno} foi reprovado com média ${media}`;
        document.getElementById("result").style.backgroundColor = "red";
    } else if (media > 2.1 && media < 6) {
        result.innerHTML = `O aluno ${nomeAluno} está de recuperação com média ${media}`;
        document.getElementById("result").style.backgroundColor = "blue";
    }
});
