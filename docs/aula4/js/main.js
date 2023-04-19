function copiaParagrafo() {
    const paragrafoOriginal = document.getElementById("parCopia").innerHTML;
    console.log(paragrafoOriginal);
    document.getElementById("par2").innerHTML = paragrafoOriginal;
}

function acenderLampada() {
    document.getElementById("lampada").src =
        "https://www.w3schools.com/js/pic_bulbon.gif";
}

function desligarLampada() {
    document.getElementById("lampada").src =
        "https://www.w3schools.com/js/pic_bulboff.gif";
}

function editStyle() {
    document.getElementById("pEdit").style.fontSize = "1.5rem";
}
function fontAlt() {
    if (document.getElementById("pEdit").style.color == "red") {
        document.getElementById("pEdit").style.color = "black";
    } else {
        document.getElementById("pEdit").style.color = "red";
    }
}

function verJanela() {
    window.alert("Ola voce esta usando meu servidor...");
}
