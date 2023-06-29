/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert(`Boas vindas ao jogo de Blackjack!`);
console.log("Boas vindas ao jogo de Blackjack!");

let iniciarRodada = confirm("Quer iniciar uma nova rodada?");

if (iniciarRodada) {
   let cartaUsuario1 = comprarCarta();
   let cartaUsuario2 = comprarCarta();
   let cartaComputador1 = comprarCarta();
   let cartaComputador2 = comprarCarta();

   let usuario = cartaUsuario1.valor + cartaUsuario2.valor;
   let computador = cartaComputador1.valor + cartaComputador2.valor;

   let cartasUsuarioTexto = cartaUsuario1.texto + ", " + cartaUsuario2.texto;

   let novaCarta = confirm(
      `Suas cartas são ${cartasUsuarioTexto}.\nA carta revelada do computador é ${cartaComputador1.texto}.\nDeseja comprar mais uma carta?`
   );

   let novasCartasUsuario = [];

   for (let i = 0; novaCarta; i++) {
      let carta = comprarCarta();
      usuario += carta.valor;
      novasCartasUsuario.push(carta);
      cartasUsuarioTexto = cartaUsuario1.texto + ", " + cartaUsuario2.texto;
      for (let j = 0; j < novasCartasUsuario.length; j++) {
         cartasUsuarioTexto += ", " + novasCartasUsuario[j].texto;
      }
      novaCarta = confirm(`Suas cartas são ${cartasUsuarioTexto}. Deseja comprar mais uma carta?`);
   }

   alert(`Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é: ${usuario}.\nAs cartas do computador são: ${cartaComputador1.texto} e ${cartaComputador2.texto}.\nA pontuação do computador é ${computador}`);


   if (usuario === computador) {
      alert("Empate.");
      console.log("Empate.");
   } else if (usuario > computador && usuario <= 21) {
      alert("O usuário ganhou.");
      console.log("O usuário ganhou.");
   } else if (computador > usuario && computador <= 21) {
      alert("O computador ganhou.");
      console.log("O computador ganhou.");
   } else if (usuario > 21 && computador <= 21) {
      alert("O computador ganhou.");
      console.log("O computador ganhou.");
   } else if (computador > 21 && usuario <= 21) {
      alert("O usuário ganhou.");
      console.log("O usuário ganhou.");
   } else {
      alert("Ambos perderam")
   }
}
