let num = [5, 8, 6, 4, 7];

//Acrescentando valores ao vetor
num[5] = 2;

//Automatizando valores do vetor
num.push(9);

console.log(`Nosso vetor é o ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

//O Atributo .length, Retorna a quantidade de elementos no array.
console.log(`Quantidade de elementos do Array é ${num.length}`);

//.sort(), Quando usado pega todos elementos e bota em ordem crescente.
console.log(`Esse é o array em ordem crescente ${num.sort()}`);

let pos = num.indexOf(2);
if (pos == -1) {
    console.log("O valor não foi encontrado!");
} else {
    console.log(`O valor está na posição ${pos}`);
}