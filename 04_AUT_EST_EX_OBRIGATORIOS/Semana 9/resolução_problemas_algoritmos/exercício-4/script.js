function calcula(){
    var numero = document.getElementById("input").value;
    var sequencia = [1,1];
    
    if (numero > 0) {
        for (i = 1; i <= parseInt(numero); i++){
            sequencia.push(sequencia[i] + sequencia[i-1]);
        };
    
        for (i = 0; i < parseInt(numero); i++) {
            document.getElementById("resultado").innerHTML += sequencia[i] + "</br>"
        }    
    }

    else {
        alert("Número inválido!")
    }
    
    
}

