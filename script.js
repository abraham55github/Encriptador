
const botonEncriptar = document.querySelector('.boton-encriptar');
const botonDesencriptar = document.querySelector('.boton-desencriptar');

botonEncriptar.addEventListener('click', function(){
    encriptarTexto();
})

function encriptarTexto(){
    const texto = document.querySelector('#texto').value;
    const tituloMensaje = document.querySelector('.titulo-mensaje')
    const parrafo = document.querySelector('.parrafo')


    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");


    if (texto.length !== 0) {
        noImage();
        tituloMensaje.textContent = "Texto cifrado correctamente";
        parrafo.textContent = textoCifrado;
    }


}

function noImage(){
    const imagen = document.querySelector('.imagen');
    if(imagen){
        imagen.classList.add('ocultar')
    }
}

