function calcolaMoltiplicazione() {
    var numero1 = parseInt(document.getElementById('numero1').value);
    var numero2 = parseInt(document.getElementById('numero2').value);
    //controllo sui numeri
    if (numero1 > 10 || numero2 > 10) {
        alert('Devi inserire solo numeri inferiori o uguali a 10');
    } else if (isNaN(numero1) || isNaN(numero2)) {
        alert('Devi inserire entrambi i numeri!');
    } else { 

    var risultatoMoltiplicazione = numero1 * numero2;
    document.getElementById('risultato').innerHTML = "Il risultato della moltiplicazione tra " + numero1 + " e " + numero2 + " è uguale a <strong>" + risultatoMoltiplicazione + "</strong>";
        document.getElementById('headTabellina').innerHTML = "Ecco la tabellina completa del " + numero1; 
        var spiegazioneMoltiplicazione = ""
        //variazione immagine del gufetto
        gufetto.src = "img/gufetto.jpg";
    //le moltiplicazioni sono meglio che addizionare tante volte lo stesso numero
    for (var i = 1; i <= (numero2 - 1); i++) { 
        spiegazioneMoltiplicazione += numero1 + " + ";
        }
         //stampa a video della spiegazione
        document.getElementById('spiegazione').innerHTML = spiegazioneMoltiplicazione + numero1 + " = " + risultatoMoltiplicazione + "<br /> Sicuramente è più semplice <strong>moltiplicare</strong> che <em>sommare</em> tutti questi numeri!";

        var tabellaHTML = "";
        for (var i = 1; i <= 10; i++) {
        var prodotto = numero1 * i;
        //creazione riga della tabella
        tabellaHTML += "<tr><td>" + numero1 + "</td><td>" + i + "</td><td>"+ prodotto + "</td></tr>";
        }
        //stampa riga della tabella
        document.getElementById('tabella').innerHTML = tabellaHTML;
        }
}