let inputNum = document.getElementById('inum');
let selSaida = document.getElementById('iselnum');


function adicionar() {
    if (inputNum.value.length == 0) {
        window.alert('O Campo não foi preenchido corretamente!');
    } else if (inputNum.value == 0 ){
        window.alert('O Número deve começar a partir de 1');
    } else if(inputNum.value > 100) {
        window.alert('Ultrapassou o Número mínimo!');
    } else {
        let numInput = Number(inputNum.value);
        let item = document.createElement('option');
        let numAdd = [numInput];
        item.text = `O Valor ${numAdd} foi adicionado`;
        selSaida.appendChild(item);
    }
}