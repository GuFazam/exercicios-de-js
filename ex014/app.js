function MaiorDeIdade(){
    let idade = document.getElementById("idade").value
    if(idade >=18){
        document.getElementById("resposta").innerHTML = "Você é Maior de Idade"
    }else{
        document.getElementById("resposta").innerHTML = "Volte é Menor de Idade"
    }
}