//Variables
let llave = {
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}
//selectores
var selectorTexto = document.getElementById("texto");
var selectorResultado = document.getElementById("datos-resultado");
var selectorResultadoInicio = document.getElementsByClassName("resultado-inicio");
var selectorBotonCopiar = document.getElementsByClassName("btn-copiar");

function desapareceElementos() {
    while (selectorResultadoInicio.length > 0) {
        selectorResultadoInicio.item(0).classList.add("display-none");
        selectorResultadoInicio[0].classList.remove("resultado-inicio");

    }
    selectorBotonCopiar[0].classList.remove("display-none");
}
//funciones
//funcion encriptar
function encriptar(){
    desapareceElementos();
    let texto = selectorTexto.value;
    let encriptado = '';
    for(let i = texto.length; i>=0 ;i--){
        let valor = texto[i];
        let clave = llave[valor] == undefined ? valor : llave[valor];
        encriptado = encriptado == 'undefined' ? clave : clave + encriptado;
    }
    selectorResultado.innerHTML = encriptado;
    return encriptado;
}
//funcion descifrado
function descifrar(){
    desapareceElementos();
    let texto = selectorTexto.value;
    let llaves = Object.keys(llave)
    for(let i = 0 ; i < llaves.length; i++) {
        let valorDesencriptado = llaves[i];
        let encriptado = llave[valorDesencriptado];
        texto = texto.replaceAll(encriptado,valorDesencriptado);
    }
    selectorResultado.innerHTML = texto;
    return texto;
}

//Copitar texto
function copiar(){
    let texto = selectorResultado.innerText;
    const type = "text/plain";
    const blob = new Blob([texto],{type});
    const data = [new ClipboardItem({[type]:blob})];
    navigator.clipboard.write(data);
}