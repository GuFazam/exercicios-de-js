function Aprovacao(){
    let n1 = document.getElementById("nota1").value
    let n2 = document.getElementById("nota2").value
    let n3 = document.getElementById("nota3").value

    let media = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3))/3

    if(media>=7){
        document.getElementById("resultado").innerHTML = "Aprovado, sua média foi: " + media
    }else if(media>=5){
        document.getElementById("resultado").innerHTML = "Você está de Recuperação, sua média foi: " + media
    }else{
        document.getElementById("resultado").innerHTML = "Reprovado, sua média foi: " + media
    }
}