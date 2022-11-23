function Somar(){
    let n1 = document.getElementById("numero1").value
    let n2 = document.getElementById("numero2").value
    let total = parseFloat(n1) + parseFloat(n2) //parseFloat converte o valor para Float (para que possa ocorrer a operação matemática)
    document.getElementById("resposta").innerHTML = total
}