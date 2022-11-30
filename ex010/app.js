function MaiorDeIdade(){
    let idade = document.getElementById("idade").value
    if(idade >=18){
        document.getElementById("resposta").innerHTML = "Você já pode dirigir"
    }else{
        document.getElementById("resposta").innerHTML = "Volte mais tarde"
    }
}