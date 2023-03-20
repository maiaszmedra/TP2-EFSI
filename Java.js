function promedio(e){
    e.preventDefault();

    var completos = required(notaMate, notaLengua,notaEfsi)

    var notaMate = parseInt(document.getElementById("Matematica").value)
    var notaLengua = parseInt(document.getElementById("Lengua").value)
    var notaEfsi = parseInt(document.getElementById("EFSI").value)

    var validado = validar(notaMate,notaLengua,notaEfsi)

    if(validado && completos){
        var promedio = (notaMate + notaLengua + notaEfsi) / 3
        var contenido = document.createElement("h1")
        var textPromedio = document.createTextNode("El promedio es " + promedio)
        contenido.appendChild(textPromedio)
        if(promedio >= 6){
            document.getElementById("resultadoPromedio").appendChild(contenido).style.color = "green"
        }
        else{
            document.getElementById("resultadoPromedio").appendChild(contenido).style.color = "red"
        }
    }

    

}

function mayorNota(e){
    e.preventDefault();

    var completos = required(notaMate, notaLengua,notaEfsi)

    var notaMate = parseInt(document.getElementById("Matematica").value)
    var notaLengua = parseInt(document.getElementById("Lengua").value)
    var notaEfsi = parseInt(document.getElementById("EFSI").value)

    var validado = validar(notaMate,notaLengua,notaEfsi)

    if(validado && completos){
        if (notaMate == notaEfsi && notaMate == notaLengua) {
            document.getElementById("divMate").style.color= "blue"
            document.getElementById("divLengua").style.color= "blue"
            document.getElementById("divEfsi").style.color= "blue"
        }
        else if (notaMate == notaLengua && notaMate > notaEfsi) {
            document.getElementById("divMate").style.color= "blue"
            document.getElementById("divLengua").style.color= "blue"
        }
        else if (notaLengua == notaEfsi && notaLengua > notaMate) {
            document.getElementById("divLengua").style.color= "blue"
            document.getElementById("divEfsi").style.color= "blue"
        }
        else if (notaEfsi == notaMate && notaEfsi > notaLengua) {
            document.getElementById("divMate").style.color= "blue"
            document.getElementById("divEfsi").style.color= "blue"
        }
        else if (notaMate > notaLengua && notaMate > notaEfsi) {
            document.getElementById("divMate").style.color= "blue"
        } 
        else if (notaLengua > notaMate && notaLengua > notaEfsi){
            document.getElementById("divLengua").style.color= "blue"
        }
        else{
            document.getElementById("divEfsi").style.color= "blue"
        }
    }
}

function validar(notaMate,notaLengua,notaEfsi){

    var validar = true

   if (notaMate <1 || notaMate > 10) {
    document.getElementById("Matematica").style.borderColor = "red"
    validar = false
   }
   else{
    document.getElementById("Matematica").style.borderColor = "green"
   }
   if (notaLengua <1 || notaLengua > 10) {
    document.getElementById("Lengua").style.borderColor = "red"
    validar = false
   }
   else{
    document.getElementById("Lengua").style.borderColor="green"
   }
   if (notaEfsi <1 || notaEfsi > 10) {
    document.getElementById("EFSI").style.borderColor="red"
    validar = false
   }
   else{
    document.getElementById("EFSI").style.borderColor="green"
   }
   return validar

}

function required(notaMate, notaLengua, notaEfsi){
    if(notaMate == null || notaLengua == null || notaEfsi == null){
        alert("Error, por favor complete todos los campos")
    }
}