function encriptar() {
    document.getElementById('miImagen').style.display = 'none';
    document.getElementById('miTexto1').style.display = 'none';
    document.getElementById('miTexto2').style.display = 'none';
    document.getElementById("resultados").style.display = "block";
    var ingresoUsuario = document.getElementById("contenedor_textos");
    var salidaUsuario = document.getElementById("output");
    var valor = Array.from(ingresoUsuario.value);
    var resultado='';
    
    for (var i = 0; i < valor.length; i++) {
        if (valor[i] === 'e') {
            valor[i] = 'enter';
        }
	if (valor[i] === 'i') {
            valor[i] = 'imes';
        }
	if (valor[i] === 'a') {
            valor[i] = 'ai';
        }
	if (valor[i] === 'o') {
            valor[i] = 'ober';
        }
	if (valor[i] === 'u') {
            valor[i] = 'ufat';
        }
        resultado += valor[i];
    }
    
    salidaUsuario.textContent = resultado;
}
function desencriptar() {
    document.getElementById('miImagen').style.display = 'none';
    document.getElementById('miTexto1').style.display = 'none';
    document.getElementById('miTexto2').style.display = 'none';
    document.getElementById("resultados").style.display = "block";
    var ingresoUsuario = document.getElementById("contenedor_textos");
    var salidaUsuario = document.getElementById("output");
    document.getElementById("resultados").style.display = "block";
    var valor = Array.from(ingresoUsuario.value);
    var resultado='';
    
    for (var i = 0; i < valor.length; i++) {
        if ((valor[i]+valor[i+1]+valor[i+2]+valor[i+3]+valor[i+4]) === 'enter') {
            resultado += 'e';
            i=i+4;
        }
        else if ((valor[i]+valor[i+1]+valor[i+2]+valor[i+3]) === 'imes') {
            resultado += 'i';
            i=i+3;
        }
        else if ((valor[i]+valor[i+1]) === 'ai') {
            resultado += 'a';
            i=i+1;
        }
        else if ((valor[i]+valor[i+1]+valor[i+2]+valor[i+3]) === 'ober') {
            resultado += 'o';
            i=i+3;
        }
        else if ((valor[i]+valor[i+1]+valor[i+2]+valor[i+3]) === 'ufat') {
            resultado += 'u';
            i=i+3;
        }
        else if (valor[i] === undefined) {
            resultado += '';
        }
        else {
            resultado += valor[i];
        }
    }
    
    salidaUsuario.textContent = resultado;
}
async function copiarFuncion() {
    /* Obtén el elemento input */
    let copyText = document.getElementById("output");
  
    try {
      /* Copia el texto al portapapeles */
      await navigator.clipboard.writeText(copyText.value);
  
      /* Alerta al usuario que el texto ha sido copiado */
      console.log('Texto copiado al portapapeles');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }
