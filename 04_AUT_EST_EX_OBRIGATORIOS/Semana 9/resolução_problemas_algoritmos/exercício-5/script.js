function calcula(){
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value; 

    document.getElementById("resultado").innerHTML += "Números primos no intervalo de " + num1 + " a " + num2 + ":";
    
    for (i = parseInt(num1); i <= parseInt(num2); i++) {
        let contaPrimo = 0;
        
        for (n = 1; n<= i; n++){
            if (i % n == 0){
                contaPrimo++
            }
        }

        if (contaPrimo == 2 || i == 1){
            document.getElementById("resultado").innerHTML += "</br>" + i;
        }
    };
}