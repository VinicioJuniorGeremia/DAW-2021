//função sem retorno
function inicio(){
    const variavel = 'Inicio da execução'
    console.log(variavel)
}
//função com retorno
function processo() {
    const variavel = 'Executando processo';
    return variavel;
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
