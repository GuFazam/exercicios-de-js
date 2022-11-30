function ligaDesliga(){

    let imagem = document.getElementById("lampada").src
    let imagem_ligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
    let imagem_desligado = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"

    if(imagem == imagem_ligado){
        document.getElementById("lampada").src = imagem_desligado
    }else{
        document.getElementById("lampada").src = imagem_ligado
    }
}
document.getElementById("lampada").addEventListener("click", ligaDesliga)