function CalcularIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = peso/(parseFloat(altura*altura))
    if(imc < 18.5){
        document.getElementById("resposta").innerHTML = imc + "Abaixo do Peso"
    }
    else if(imc >= 18.5, imc <=25){
        document.getElementById("resposta").innerHTML = imc + "Peso Normal"
    }
    else if(imc > 25, imc <=30){
        document.getElementById("resposta").innerHTML = imc + "Acima do Peso"
    }
    else if(imc >30){
        document.getElementById("resposta").innerHTML = imc + "Obeso"
    }
    else{
        document.getElementById("resposta").innerHTML = imc + "Obesidade Grave"
    }
}