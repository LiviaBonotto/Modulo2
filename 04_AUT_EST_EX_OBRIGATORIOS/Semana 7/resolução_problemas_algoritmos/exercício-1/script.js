function adicionar(numeroInput) {
    const input = document.getElementById(numeroInput);
    let valor = parseInt(input.valor);
    const novoValor = valor + 1;
    input.valor = novoValor;
}

function remover(){

}

function enviaSoma() {
    adicionar("numeroInput");
}