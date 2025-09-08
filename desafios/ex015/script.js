function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formAno = document.getElementById('txtano');
    let res = document.getElementById('res');

    if (formAno.value.length == 0 || Number(formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(formAno.value);
        let gênero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/menino.png');
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-masculino.png');
            } else if (idade < 32) {
                //Rapaz
                img.setAttribute('src', 'imagens/rapaz-masculino.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.png');
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.png');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'imagens/menina.png');
            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-feminina.png');
            } else if (idade < 32) {
                //Moça
                img.setAttribute('src', 'imagens/moça-feminina.png');
            } else if (idade < 50) {
                //Adulta
                img.setAttribute('src', 'imagens/adulta-f.png');
            } else {
                //Idosa
                img.setAttribute('src', 'imagens/idosa-f.png');
            }
        }
        res.textContent = `Detectamos ${gênero} com ${idade} anos.`;
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
}