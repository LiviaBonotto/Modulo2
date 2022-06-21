function trocaInputs (input1, input2) {
    const in1 = document.getElementById("input1");
    const in2 = document.getElementById("input2");
    const in1Value = in1.value;
    in1.value = in2.value;
    in2.value = in1Value;
}

function trocaPosicao () {
    trocaInputs("input1, input2");
}