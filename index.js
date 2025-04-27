// function soma (valor1,valor2){

//     return valor1 + valor2;
// }

// function alertaHello(){

//     alert ('Ola mundo');
// }

// function paraCelsius(valor1){

// return (5 / 9) * (valor1-32);

// }

// var x= paraCelsius (77);
// alert ("A temperatura é de "+x+" graus celsius" );

// document.getElementById ("texto") .innerHTML = soma (10,10);

// const carro = {
//     marca:"ford",
//     modelo:"ka",
//     ano:"2015",
//     placa:"abc1234",
//     buzina: function () { alert('biiiiiiiiiiii') },
//     completo: function () { return"A marca é" + this.marca + "E o modelos é:" + this.modelo },
// };

// console.log(carro);

// carro.buzina();

// console.log (carro.completo());




// ***Botao acionado com 1 clicks***


// function eventoClick() {

// alert ('acionou o botao eventoClick');

// document.body.style.backgroundColor = "yellow";
// }



// // ***Botao acionado com 2 clicks***



// function eventoDBLClick() {
// alert ('acionou o botao eventoDBLClick');
//     document.body.style.backgroundColor = "yellow";
// }

// ADICIONADO COR QUANDO O MOUSE ESTIVER EM CIMA DO LOCAL
// function viraVermelho(){
//     let div = document.getElementById ("cor");
//     div.style.backgroundColor ="red"
// }



// ADICIONADO COR QUANDO O MOUSE SAIR DO LOCAL
// function viraAzul(){
// let div = document.getElementById ("cor");
// div.style.backgroundColor ="blue";
// }

// ***ADICIONADO TEXTO DO HTML QUANDO O MOUSE MOVER EM CIMA DO LOCAL APPEND ((ADICIONAR O TEXTO))***

// function adicioneTexto(){
//  let p = document.getElementById ("texto");
//  p.append("o mouse moveu<br>");
// }



// ***ACONTECER ALGO QUANDO CLICAR O SOLTAR NO LOCAL***

// onmouseup=" alert('clicou na tela') "


// function mudou(){

//     console.log(' Mudou ');


// }


// function teclaPressionada(){
//     let input = document.getElementById ("campoTexto").value;
//     console.log(input);
// }


// EXEMPLO DEE ARRAYS
// const lista = ["arroz","feijao","macarrão","leite"]
// A LISTA [0](LISTA POSIÇÃO 0) VAI CONTER O VALOR DE "ARROZ"
// A LISTA [1](LISTA POSIÇÃO 1) VAI CONTER O VALOR DE "FEIJAO"
// A LISTA [2](LISTA POSIÇÃO 2) VAI CONTER O VALOR DE "MACARRÃO"
// A LISTA [3](LISTA POSIÇÃO 3) VAI CONTER O VALOR DE "LEITE"
            //   0         1          2         3
// const lista =[ "arroz", "feijao", "macarrão", "leite" ];

// lista[0] = "cafe";
// alert(lista[0]);
 
// console.log(lista);

//  const pessoa = ["Fernando", "Araujo",  26];
//  pessoa.push("Aluno");
//  console.log(pessoa);
// pessoa.splice(1,0,"item1","item2");


// document.getElementById("teste").innerHTML = pessoa.join(" * ");

// const lista1= ["arroz","feijao","leite","macarrão"];

// const lista2= ["suco","refri","carne",];

// const lista3= ["salgadinho"];

// const superlista = lista1.concat (lista2,lista3);


// document.getElementById("teste").innerHTML = superlista;


// const jogadores = [ 
//     "Biro Biro",
//     "Ribamar",
//     "Pele",
//     "Maradona",
//     "Neymar",
//     "Messi",
//     "Ronaldo",
//     "Vampeta",
//     "Dimitri"

// ];    

// const craques = 
 
// const jogadorordem = jogadores.sort();


// numeros.sort(function(a,b){return a-b});


// function maiorNumero (array){

//     return Math.max.apply(null,array);
// }

// function menorNumero (array){

//     return Math.min.apply(null,array);
// }

// const numeros =[40,100,1,5,25,10];

// const maior20 = numeros.filter(filtragrem);

// function filtragrem (value,index,array){

//     return value > 20;

// }

// document.getElementById("teste").innerHTML = maior20;

//  var imterruptor = "off";

//  if(imterruptor =="on"){
//     alert (' A lampada esta ligada' );
    
//  }

//  else {
//     alert (' A lampada esta desligada');

//  }

// var hora = new Date().getHours();

// if (hora <12){

//     alert('bom dia');
// }

// else if (hora<18) {
//     alert ('boa tarde');


// }

// else {
//     alert('boa noite');

// }

// function verificar (){

//     let nome = document.getElementById("nome").value;
//     if (nome == '' || nome == null) {
//         let p = document.getElementById("teste");
//         p.innerHTML = "o campo nao pode ser vazio";
//         p.style.color="red";
//             }



//     else {
//         let p = document.getElementById("teste");
//         p.innerHTML = "Parabens tudo certo";
//         p.style.color="green";
// }
// }

// function verificaCor(){
//       let cor = document.getElementById ("cor").value;    
//     cor =  cor.toLowerCase();

//     switch (cor){

//         case "azul":
    
//                 // acontece algo aqui
//                 document.body.style.backgroundColor = "blue";
//         break;
    
                
    
//         case "vermelho":
    
//                 // acontece algo aqui
//                 document.body.style.backgroundColor = "red";
    
//         break;
    
//         case "amarelo":
    
//                 // acontece algo aqui
//                 document.body.style.backgroundColor = "yellow";

//         break;
    
//         default: 
    
//                 // acontece algo aqui

//         document.getElementById("teste").innerHTML = "nenhuma cor disponivels para:" + cor;
    
    
//     }

// } 

               //  DESCOBRIR DATA DE HOJE 
// function diaDaSemana(){
//     var dia = new Date().getDay();

// console.log (dia);


//     switch (dia){

//          case 0:
//                         //acontece algo aqui
//           document.getElementById("teste").innerHTML = "hoje é domingo "
//          break;
            
                        
            
//         case 1:
            
//                         // acontece algo aqui
//         document.getElementById("teste").innerHTML = "hoje é segunda "
            
//         break;
            
//       case 2 :
            
//                          // acontece algo aqui
//         document.getElementById("teste").innerHTML = "hoje é terça "
        
//         break;

//         case 3 :
            
//                          // acontece algo aqui
//         document.getElementById("teste").innerHTML = "hoje é quarta "
        
//         break;

//         case 4 :
            
//                          // acontece algo aqui
//          document.getElementById("teste").innerHTML = "hoje é quinta "
        
//         break;

//         case 5 :
            
//                          // acontece algo aqui
//          document.getElementById("teste").innerHTML = "hoje é sexta "
        
//         break;
            
//            case 6 :
            
//                          // acontece algo aqui
//         document.getElementById("teste").innerHTML = "hoje é sabado "
        
//         break;

//         default: 
            
//                     // acontece algo aqui
        
//    document.getElementById("teste").innerHTML = "nao sei que dia é ...";


//     }



// }


// for (let i=0; i < 10001; i++ ) {

//     document.getElementById("teste").innerHTML += i + ", "; 


// }


// var ano = new Date ().getFullYear();

// for (let i = ano; i > 1900; i-- ) {

//     document.getElementById("ano").innerHTML += "<option value=' " +i+ "'>" + i +" </option>";



// }


// const carros = [ "gol", "fusca","brasilia","Del Rey","Ferrari"];

// var tamanho = carros.length;

// for (let i = 0; i < tamanho ; i ++ ){

//     document.getElementById("teste").innerHTML += carros[i] + " - ";

// }







    // document.getElementById("tempo").innerHTML = "começou a contar";
//     tempo = setTimeout(function(){

//     document.body.style.backgroundColor = "red"; 
//     document.getElementById("tempo").innerHTML = "Executou a contagem";


//         }
//         , 5000);

// }



//     clearTimeout (tempo);
//     


// }


// let segundos = 0;
// let intervalo;

// function ativarContagem() {
//   // Evita múltiplos intervalos
//   if (intervalo) return;

//   intervalo = setInterval(() => {
//     segundos++;
//     document.getElementById("tempo").textContent = segundos;
//   }, 1000); // 1 segundo
// }

// function PararContagem() {
//   clearInterval(intervalo);
//   
//   
// }




function ativarContagem(){
    document.getElementById("tempo").innerHTML = "começou a contar";
    tempo = setTimeout(function(){

    document.body.style.backgroundColor = "red"; 
    document.getElementById("tempo").innerHTML = "Executou a contagem";


        }
        , 5000);

}

function PararContagem(){

    clearTimeout (tempo);
    document.getElementById("tempo").innerHTML = "Parou a Contagem";


}


let segundos = 0;
let intervalo;

function ativarContagem() {
  // Evita múltiplos intervalos
  if (intervalo) return;

  intervalo = setInterval(() => {
    segundos++;
    document.getElementById("tempo").textContent = segundos;
  }, 1000); // 1 segundo
}

function PararContagem() {
  clearInterval(intervalo);
  intervalo = null; // Permite reiniciar
  document.getElementById("tempo").textContent = segundos + " (pausado)";
}

function ZerarContagem() {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    document.getElementById("tempo").textContent = segundos;
  }

  