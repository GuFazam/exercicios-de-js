function PesoIdeal(){
    let sexo = document.getElementById("sexo").value
    let altura = document.getElementById("altura").value
    let pesof = (62.1 * altura)-44.7
    let pesom =  (72.7 * altura)-58
    if(sexo=f){
        document.getElementById("resposta").innerHTML = "Seu peso ideal é: " + pesof.toFixed(1)
    }
    else if(sexo=m){
        document.getElementById("resposta").innerHTML = "Seu peso ideal é: " + pesom.toFixed(1)
    }
}