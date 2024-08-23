function calcolaAddizione() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    //controllo sui numeri
    if (numero1 > 100 || numero2 > 100) {
        alert('Devi inserire solo numeri inferiori o uguali a 100');
    } else if (isNaN(numero1) || isNaN(numero2)) {
        alert('Devi inserire entrambi i numeri!');
    } else { 

    var risultatoAddizione = numero1 + numero2;
    document.getElementById('risultato').innerHTML = "Il risultato dell'addizione tra " + numero1 + " e " + numero2 + " è uguale a <strong>" + risultatoAddizione + "</strong>";
    
}}