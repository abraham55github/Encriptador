document.addEventListener('DOMContentLoaded', function(){

    iniciarApp();
})

function iniciarApp(){
    encriptarTexto();
}

function encriptarTexto(){
    let texto = document.getElementById("textoUsuario").value.toLowerCase();
    let resultado = "";

    for (var i=0; i< texto.length; i++){
        switch(texto[i]){
            case 'e':
                resultado += 'enter';
                break;
            case 'i':
                resultado + 'imes';
                break;
            case 'a':
                resultado += 'ai ';
                break;
            case 'o':
                resultado += 'ober ';
                break;
            case 'u':
                resultado += 'ufat ';
                break;
            default:
                resultado += texto[i];
        }

        document.getElementById("mostrarTexto").innerHTML = "<h2>Texto encriptado: </h2><p>" + resultado + "</p>";
    }
}

