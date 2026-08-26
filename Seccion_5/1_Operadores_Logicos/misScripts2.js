function comparacion(){
    let elementoNumero1 = Number(document.getElementById("numero1").value);
    let elementoNumero2 = Number(document.getElementById("numero2").value);

    let elementoRespuesta1 = document.getElementById("resultado");

    let resultado = numero1 >= numero2;
    elementoRespuesta1.textContent = resultado;
}