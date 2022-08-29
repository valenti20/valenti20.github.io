
/*Encriptar*/
const textoUno = document.querySelector(".textoUno");
const textoDos = document.querySelector(".textoDos");

function botonEncriptar(){
    const mensajeEncriptado = encriptar(textoUno.value);
     textoDos.value = mensajeEncriptado;
}

function encriptar(encriptacion){
    let codigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]]
    encriptacion = encriptacion.toLowerCase();
    for (let i = 0; i< codigo.length; i++){
        if(encriptacion.includes(codigo[i][0])){
            encriptacion = encriptacion.replaceAll(codigo[i][0],codigo[i][1])
        }
    }
    return encriptacion;
}

/*Desencriptar*/
function botonDesencriptar(){
    const mensajeDesencriptado = desencriptar(textoUno.value);
     textoDos.value = mensajeDesencriptado;
}

function desencriptar(desencriptacion){
    let antiCodigo = [["enter","e"],["imes", "i"],["ai","a"],["ober","o"],["ufat","u"]]
    desencriptacion = desencriptacion.toLowerCase();
    for (let i = 0; i< antiCodigo.length; i++){
        if(desencriptacion.includes(antiCodigo[i][0])){
            desencriptacion = desencriptacion.replaceAll(antiCodigo[i][0],antiCodigo[i][1])
        }
    }
    return desencriptacion;
}

/*Botones*/
function botonCopiar(){
    const mensajeCopiado = document.getElementById("textoDos").value
    navigator.clipboard.writeText(mensajeCopiado);
    document.getElementById("textoDos").value = "";
}

function botonPegar(){
    navigator.clipboard.readText().then(mensajeCopiado => {
        document.getElementById("textoUno").value = mensajeCopiado;
    })
}

function botonLimpiar(){
    document.getElementById("textoUno").value = "";
    document.getElementById("textoDos").value = "";
}