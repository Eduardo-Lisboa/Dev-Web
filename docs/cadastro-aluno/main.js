const button = document.getElementById("submit");

button.addEventListener("click", () => {
    let nomeAluno = document.getElementById("nome").value;
    console.log(
        "🚀 ~ file: main.js:5 ~ button.addEventListener ~ nomeAluno:",
        nomeAluno
    );
    let emailAluno = document.getElementById("email").value;
    console.log(
        "🚀 ~ file: main.js:10 ~ button.addEventListener ~ emailAluno:",
        emailAluno
    );

    let selectCurso = document.querySelector("#curso").value;

    let genero = document.getElementsByName("gender");

    for (let i = 0; i < genero.length; i++) {
        if (genero[i].checked) {
            genero = genero[i].value;
        }
    }
    let horarioCurso = document.querySelectorAll(
        "input[type=checkbox]:checked"
    );
    let text = "";
    for (let i = 0; i < horarioCurso.length; i++) {
        text += horarioCurso[i].value + " ";
    }

    document.getElementById(
        "result"
    ).innerHTML = `{Aluno: ${nomeAluno} <br> Email: ${emailAluno} <br> Curso: ${selectCurso} <br> Gênero: ${genero} <br> Horário: ${text} }`;
});
