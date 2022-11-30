function MostrarNome(){
    let nome = document.getElementById("nome").value
    const quantidadeLetras = document.getElementById("nome").value
    document.getElementById("mensagem").innerHTML = "O seu nome é: " + nome + " // " + quantidadeLetras.length
}