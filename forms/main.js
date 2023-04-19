const buttonSubmitRadio = document.getElementById("submit-radio");

buttonSubmitRadio.addEventListener("click", () => {
    let elemento = document.getElementsByName("gender");

    for (let i = 0; i < elemento.length; i++) {
        if (elemento[i].checked) {
            console.log(
                "🚀 ~ file: main.js:8 ~ buttonSubmit.addEventListener ~ elemento:",
                elemento
            );
            document.getElementById("result-radio").innerHTML =
                "Genero: " + elemento[i].value;
        }
    }
});

const buttonSubmitSelect = document.getElementById("submit-select");

buttonSubmitSelect.addEventListener("click", () => {
    let selectElement = document.querySelector("#select").value;
    document.querySelector(".result-select").textContent = selectElement;
});

const buttonSubmitCheckbox = document.getElementById("submit-checkbox");

buttonSubmitCheckbox.addEventListener("click", () => {
    let checkBoxes = document.querySelectorAll("input[type=checkbox]:checked");
    let text = "";
    for (let i = 0; i < checkBoxes.length; i++) {
        text += checkBoxes[i].value + " ";
    }
    document.getElementById("result-checkbox").innerHTML = text;
});
