function adicionar(numeroInput) {
    const input = document.getElementById("numeroInput");
    let value = parseInt(input.value);
    const novoValor = value + 1;
    input.value = novoValor;
}

function remover(){
    const input = document.getElementById("numeroInput");
    let value = parseInt(input.value);
    const novoValor = value - 1;
    input.value = novoValor;
}

function enviaSoma() {
    adicionar("numeroInput");
}

function enviaSubtracao() {
    remover("numeroInput");
}

