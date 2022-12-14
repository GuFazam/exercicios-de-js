function CalcularIMC(){
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let imc = peso/(parseFloat(altura*altura))
    if(imc < 18.5){
        document.getElementById("resposta").innerHTML = imc.toFixed(1) + "Abaixo do Peso"
    }
    else if(imc >= 18.5, imc <=25){
        document.getElementById("resposta").innerHTML = imc.toFixed(1) + "Peso Normal"
    }
    else if(imc > 25, imc <=30){
        document.getElementById("resposta").innerHTML = imc.toFixed(1) + "Acima do Peso"
    }
    else if(imc >30){
        document.getElementById("resposta").innerHTML = imc.toFixed(1) + "Obeso"
    }
    /*else{
        document.getElementById("resposta").innerHTML = imc.toFixed(1) + "Obesidade Grave"
    }*/
}