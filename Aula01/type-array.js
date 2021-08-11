//Vetor array de valores
const vetor = ['banana', 'maçã', 'pessego'];
console.log(vetor);

//Adiciona um item ao vetor
vetor.push('abacate');

console.log(vetor)

const frutas = [
    {nome: 'Banana', paisOrigem: 'Brasil'},
    {nome: 'Maçã', paisOrigem:'Argentina'},
    {nome: 'Pêssego', paisOrigem: 'Chile'}
];
console.log('Vetor original \n', frutas);
console.table(frutas);

console.log('Item 2 do Vetor \n', frutas[1]);
console.log('Atributo paisOrigem do Item 2 do Vetor \n', frutas[1]['paisOrigem']);
console.log('Atributo paisOrigem do Item 2 do Vetor \n', frutas[1].paisOrigem);

