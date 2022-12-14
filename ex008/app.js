function SalarioLiquido(){
    let valorhora = document.getElementById("valorhora").value
    let horastrabalhadas = document.getElementById("horastrabalhadas").value
    let bruto = (valorhora * horastrabalhadas)
    let ir = (bruto * 0.11)
    let inss = (bruto * 0.08)
    let sindicato = (bruto * 0.05)
    let descontos = (ir + inss + sindicato)
    let liquido = (bruto - descontos)
    
    document.getElementById("resposta").innerHTML += "Salário Bruto: " + "R$:" + bruto.toFixed(2) + "<br>"
    document.getElementById("resposta").innerHTML += "IR: " + "R$:" + ir.toFixed(2) + "<br>"
    document.getElementById("resposta").innerHTML += "INSS: " + "R$:" + inss.toFixed(2) + "<br>"
    document.getElementById("resposta").innerHTML += "Sindicato: " + "R$:" + sindicato.toFixed(2) + "<br>"
    document.getElementById("resposta").innerHTML += "Salário Liquido: " + "R$:" + liquido.toFixed(2) + "<br>"
}