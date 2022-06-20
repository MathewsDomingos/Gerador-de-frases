const elementoResposta = document.querySelector("#resposta")

const respostas = [
  "Então siga sendo tudo que assusta alguns e encanta outros ✨🦋",
  "Nasci pra viver a história mais importante de todas - a minha. ✨",
  "Ela é firme, decidida, justa, doce, livre 🌻",
  "Abençoada, protegida, iluminada, feliz, grata pela vida e guiada por Deus ✨🙏",
  "Aceite-se e perdoe-se. Rodeie-se de amor e verdade. E siga sendo luz ❤️✨",
  "Sempre procurando ser a melhor versão de mim... ✨",
  "Seja mais você e menos o que os outros querem que você seja 💫💫",
  "Nenhuma beleza brilha mais que um bom coração. 🤍✨",
  "Que a vida seja vivida de gratidão em gratidão ✨",
  "Me pertencer, já me basta 🦋✨🆕",
]

// clicar em fazer pergunta
function gerarTexto() {

  /*if(respostas == ""){
    document.body.classList.remove('glassmorphism') 
  }*/

  if(active == ""){
    removerDisplay.classList.remove('glassmorphism');
  }

  const removerDisplay = document.getElementById('active');
  removerDisplay.classList.add('glassmorphism');

  const element = buttonPerguntar
  
  //"<div>" + buttonPerguntar + "</div>"

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
}