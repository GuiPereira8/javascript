function contar() {
    let inpuInicio = document.getElementById('txtInicio');
    let inpuFim = document.getElementById('txtFim');
    let inpuPasso = document.getElementById('txtPasso');
    let res = document.getElementById('saida');
    //&#x1F3C1; emoji de bandeira
    //&#x1F449; emoji da mãozinha
    if (inpuInicio.value.length == 0 || inpuFim.value.length == 0 || inpuPasso.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO!] Faltam dados!');
    } else {
        res.innerHTML = '<strong>Contando: </strong>'
        let numInicio = Number(inpuInicio.value);
        let numFim = Number(inpuFim.value);
        let numPasso = Number(inpuPasso.value);
        if (numPasso <= 0 ) {
            window.alert('Passo inválido! Considerando PASSO 1');
            numPasso = 1
        }
        if (numInicio < numFim) {
            //Contagem crescente
            for (let contador = numInicio; contador <= numFim; contador += numPasso) {
                res.innerHTML += ` \u{1F449} ${contador} `
            }
        } else {
            //Contagem regressiva
            for (let contador = numInicio; contador >= numFim; contador -= numPasso) {
                res.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}