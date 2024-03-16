let= textoacopiar= document.querySelector("texto");
function encriptar(){
    let texto =document.getElementById("texto").value;
   tituloMensaje= document.getElementById("titulo-mensaje");
    parrafo= document.getElementById("parrafo");
    let munieco= document.getElementById("munieco");

    let textoCifrado = texto
    .replace(/e/gi,"enter") 
    .replace(/i/gi,"imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat")
if(document.getElementById("texto").value.length !=0) {
    document.getElementById("texto").value= textoCifrado;
    tituloMensaje.textContent="texto encriptado con exito";
    parrafo.textContent= "";
    munieco.src="/imagenes/encriptado.jpg";
}else{ 
    munieco.src="/imagenes/MUÑICO.png";
    tituloMensaje.textContent="Ningun mensaje encontrado"
    parrafo.textContent= "Ingresa el texto que desea encriptar o desencriptar";
    alert("Debes ingresar algun texto");
    }
}
function desencriptar(){
    let texto =document.getElementById("texto").value;
   tituloMensaje= document.getElementById("titulo-mensaje");
    parrafo= document.getElementById("parrafo");
    let munieco= document.getElementById("munieco");

let textoCifrado = texto
    .replace(/enter/gi,"e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");
    
    if(texto.length !=0){
    document.getElementById("texto").value= textoCifrado;
    tituloMensaje.textContent="texto desencriptado con exito";
    parrafo.textContent= "";
    munieco.src="/imagenes/desencriptado.jpg";
}else{
    munieco.src="/imagenes/MUÑICO.png";
    tituloMensaje.textContent="Ningun mensaje encontrado"
    parrafo.textContent= "Ingresa el texto que desea encriptar o desencriptar";
    alert("Debes ingresar algun texto");
    }
}

   

