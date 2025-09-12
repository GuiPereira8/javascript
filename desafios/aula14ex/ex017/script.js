function tabuada() {
    let tabu = document.getElementById('seltab');
    let inpNum = document.getElementById('txtn');
    if (inpNum.value.length == 0) {
        window.alert('Por Favor digite um número!');
    } else {
        let numInput = Number(inpNum.value);
        let tabuNum = 1
        tabu.innerHTML = ''
        while (tabuNum <= 10) {
            let item = document.createElement('option');
            item.text = `${numInput} x ${tabuNum} = ${numInput * tabuNum}`
            item.value = `Tab${tabuNum}`
            tabu.appendChild(item)
            tabuNum++
        }
    }
}