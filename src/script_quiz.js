function risultatoQuiz() {
    var tabellaHTML = "";
    var indovinate = 0;
    var errori = 0;
    var nonRisposte = 0;
    var risposta1 = parseInt(document.getElementById('domanda1').value);
    var risposta2 = parseInt(document.getElementById('domanda2').value);
    var risposta3 = parseInt(document.getElementById('domanda3').value);
    var risposta4 = parseInt(document.getElementById('domanda4').value);

    if (risposta1 == 6) {
        tabellaHTML += "<tr><td><strong>3 x 2</strong></td><td>" + risposta1 + "</td><td><em class='green'>6</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        indovinate++;
    } else if (isNaN(risposta1)) {
        tabellaHTML += "<tr><td><strong>3 x 2</strong></td><td><em>non hai risposto</em></td><td><em class='red'>6</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        nonRisposte++;
    } else {tabellaHTML += "<tr><td><strong>3 x 2</strong></td><td>" + risposta1 + "</td><td><em class='red'>6</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        errori++;}

    if (risposta2 == 7) {
        tabellaHTML += "<tr><td><strong>12 - 5</strong></td><td>" + risposta2 + "</td><td><em class='green'>7</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        indovinate++;
    } else if(isNaN(risposta2)){ 
        tabellaHTML += "<tr><td><strong>12 - 5</strong></td><td><em>non hai risposto</em></td><td><em class='red'>7</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        nonRisposte++;
    }else {
        tabellaHTML += "<tr><td><strong>12 - 5</strong></td><td>" + risposta2 + "</td><td><em class='red'>7</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        errori++;
    }
    
    if (risposta3 == 2) {
        tabellaHTML += "<tr><td><strong>10 - 5</strong></td><td>" + risposta3 + "</td><td><em class='green'>2</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        indovinate++;
    } else if(isNaN(risposta3)){ 
        tabellaHTML += "<tr><td><strong>12 - 5</strong></td><td><em>non hai risposto</em></td><td><em class='red'>2</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        nonRisposte++;
    }else {
        tabellaHTML += "<tr><td><strong>12 - 5</strong></td><td>" + risposta3 + "</td><td><em class='red'>2</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        errori++;
    }

    if (risposta4 == 20) {
        tabellaHTML += "<tr><td><strong>13 + 7</strong></td><td>" + risposta4 + "</td><td><em class='green'>20</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        indovinate++;
    } else if(isNaN(risposta4)){ 
        tabellaHTML += "<tr><td><strong>13 + 7</strong></td><td><em>non hai risposto</em></td><td><em class='red'>20</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        nonRisposte++;
    }else {
        tabellaHTML += "<tr><td><strong>13 + 7</strong></td><td>" + risposta4 + "</td><td><em class='red'>20</em></td></tr>";
        document.getElementById('tabella').innerHTML = tabellaHTML;
        errori++;
    }

    document.getElementById('risultato').innerHTML = "Hai indovinato ben <strong class='green'>" + indovinate +"</strong> domande, ne hai sbagliate <strong class='red'>"+errori+"</strong> e non hai risposto a <strong>"+nonRisposte+"</strong> domande!";
        
}