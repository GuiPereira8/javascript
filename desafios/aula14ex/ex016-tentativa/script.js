let txtInicio = document.getElementById('inpInicio');
let txtFim = document.querySelector('input#inpFim');
let txtPasso = document.querySelector('input#inpPasso');
let saida = document.getElementById('divRes');
//&#x1F3C1; emoji de bandeira
//&#x1F449; emoji da mãozinha
function contar() {
    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0 ) {
        window.alert('[ERRO!] Faltam dados');
    } else if (txtFim.value == 0 || txtPasso.value == 0 ) {
        window.alert('ERRO! Os campos não foi preenchido corretamente');
    } else {
        // saida.textContent = 'Contando'
        let numInicio = Number(txtInicio.value);
        let numFim = Number(txtFim.value);
        let numPasso = Number(txtPasso.value);
        saida.textContent = `Contando de ${numPasso} em ${numPasso} :`
        for (let cont = numInicio; cont <= numFim; cont += numPasso) {
            saida.innerHTML += `&#x1F449;${cont}`;
        }
        saida.innerHTML += `  &#x1F3C1;`;
        
    }
}