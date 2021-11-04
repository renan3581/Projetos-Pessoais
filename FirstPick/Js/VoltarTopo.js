//Button - Voltar ao Topo.

//Definindo o botão uando Id.
mybutton = document.getElementById("topo");

// Quando o usuario descer mais de 500px o Botão ira aparecer.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o botao for clicado, volte ao topo.
function VoltarTopo() {
  document.body.scrollTop = 0; //Safari
  document.documentElement.scrollTop = 0; //chrome e edge
}