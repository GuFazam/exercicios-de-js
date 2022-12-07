function LitrosDeCombustivel(){
    let dinheiro = document.getElementById("dinheiro").value
    let litros = (parseFloat(dinheiro))/5
    let km = litros * 20
    document.getElementById("resposta").innerHTML = "Você Pode Comprar " + litros + " Litros de Gasolina e andar " + km + "Km"
}