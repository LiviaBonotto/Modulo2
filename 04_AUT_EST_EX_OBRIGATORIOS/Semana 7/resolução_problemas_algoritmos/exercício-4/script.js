function calcula(){
    var pessoas = document.getElementById("inputPessoas").value;
    var periodo = document.getElementById("periodoSelect").value;

    
    if((periodo == "1") & (pessoas <= 50)){
        alert("R$100,00 por pessoa.")
    }

    else if((periodo == "1") & (pessoas > 50)){
        var aux = 100 - (100 * 0.2);
        alert("R$" + aux + ",00 por pessoa.")
    }

    else if((periodo == "2") & (pessoas <= 50)){
        alert("R$200,00 por pessoa.")
    }

    else if((periodo == "2") & (pessoas > 50)){
        var aux = 200 - (200 * 0.4);
        alert("R$" + aux + ",00 por pessoa.")
    }

    else{
        alert("\nValor inválido")
    }
}

