let num = [5, 8, 6, 4, 7];

//Acrescentando valores ao vetor
num[5] = 2;
num[6] = 3;
num[7] = 1;
num[8] = 5;

//Automatizando valores do vetor
num.push(90);

console.log(`Nosso vetor é o ${num}`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

//O Atributo .length, Retorna a quantidade de elementos no array.
console.log(`Quantidade de elementos do Array é ${num.length}`);

//.sort(), Quando usado pega todos elementos e bota em ordem crescente.
console.log(`Esse é o array em ordem crescente ${num.sort()}`);

//Usando repetição para mostrar o array/vetor
for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos]);
}