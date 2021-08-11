//função sem retorno
function inicio(){
    const variavel = 'Inicio da execução'
    console.log(variavel)
}

const init = function() {
    console.log('Inicio Alternativo')
}

//função com dois function
function processa(func1, func2) {
    inicio();
    
    const variavel = 'Executando processo';
    console,log(variavel);

    fim();
}
//função sem retorno
function fim() {
    const variavel = 'Finalizando execução do processo';
    console.log(variavel)
}
//executa todas as funções
function run() {
    inicio();

    const retorno = processo();
    console.log(retorno);

    fim()

    
}

run();
