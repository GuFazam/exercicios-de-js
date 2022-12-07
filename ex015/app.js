function Tabuada(){
    let contador = 0
    let n1 = document.getElementById("n1").value
    document.getElementById("resposta").innerHTML = ""
    while (contador <= 10){
        document.getElementById("resposta").innerHTML += n1 + "X" + contador + "=" + contador*n1 + "<br>"
        contador = contador + 1
    }
}