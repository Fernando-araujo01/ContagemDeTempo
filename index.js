
function ativarContagem(){

   tempo =  setInterval (function(){
    
    var cronometro = document.getElementById('tempo').innerHTML;
    var soma = parseInt(cronometro) -1 ;

    if (soma === 0 ) {
        document.getElementById("tempo").innerHTML = "TEMPO ESGOTADO";  PararContagem();
        
    } 
    else {
    document.getElementById("tempo").innerHTML = soma;
        }
 }
,1000) ;
}



function PararContagem(){

    clearInterval(tempo);
    intervalo = null; // Permite reiniciar;
    document.getElementById("tempo").textContent = soma; + "(pausado)";cronometro;
    document.getElementById("tempo").innerHTML = soma;

};



 function ZerarContagem() {
 clearInterval(intervalo);
 intervalo = null;
 segundos = 20;
 document.getElementById("tempo").textContent = segundos;
}


