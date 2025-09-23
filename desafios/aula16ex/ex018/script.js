let inpNum = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let saida = document.querySelector('div#res');
let valores = [];

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true;
    } else {
        return false;
    }
}
function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isnumero(inpNum.value) && !inlista(inpNum.value, valores)) {
        valores.push(Number(inpNum.value));
        let item = document.createElement('option');
        item.text = `Valor ${inpNum.value} adicionado`;
        lista.appendChild(item);
        saida.innerHTML = '';
    } else {
        window.alert('Valor inválido ou ja encontrado na lista.');
    }
    inpNum.value = '';
    inpNum.focus();
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    }
    else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior)
                maior = valores[pos];
             if (valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / tot
        saida.innerHTML = '';
        saida.innerHTML += `<p>O total de números cadastrados é ${tot}.</p>`;
        saida.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        saida.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        saida.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        saida.innerHTML += `<p>A média dos valores é ${media}</p>`;
    }
}