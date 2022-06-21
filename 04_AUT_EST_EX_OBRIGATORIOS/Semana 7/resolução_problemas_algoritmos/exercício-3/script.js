function testaInput (input) {
    const numero = document.getElementById("input");
    const formato = /^\([1-9]{2}\)(?:[2-8]|[1-9][1-9])[0-9]{3}\-[0-9]{4}$/g.test(numero.value);

    // testa o input
    if (formato) {
        alert ("Número enviado!")
    } 
    
    else {
        alert("Formato incorreto! Envie seu número de telefone no formato (xx)xxxxx-xxxx")
    } 

}

