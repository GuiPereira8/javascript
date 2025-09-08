function carregar() {
    let mensagem = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let fooPa = document.getElementById('copyname');
    let data = new Date();
    let hora = data.getHours();

    mensagem.textContent = `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'images/foto-manha.png'
        document.body.style.backgroundColor = '#ead3ac'
        fooPa.style.color = 'black'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'images/foto-tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //BOA NOITE!
        img.src = 'images/foto-noite.png'
        document.body.style.backgroundColor = '#412f4b'
    }
}