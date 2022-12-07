function Tabuada(){
    let contador = 0
    while (contador <= 10){
        document.getElementById("resposta").innerHTML += "8" + "X" + contador + "=" + contador*8 + "<br>"
       contador = contador + 1
    }
}