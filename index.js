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

  if(active == ""){
    removerDisplay.classList.remove('glassmorphism')
  }

  const removerDisplay = document.getElementById('active')
  removerDisplay.classList.add('glassmorphism')

  // gerar numero aletorio
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;
}

//Compartilhar no WhatsApp
document.addEventListener("DOMContentLoaded", function() {
  //conteúdo que será compartilhado: Título da página + URL
  const conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //altera a URL do botão
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

//Compartilhar no Facebook
document.addEventListener("DOMContentLoaded", function() {            
  //altera a URL do botão
  document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}, false);

//Compartilhar no twitter     
document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href);
  var titulo = encodeURIComponent(document.title);
  //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
  //altera a URL do botão
  document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;
}, false);

//Compartilhar no Linkedin
document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href); //url
  var titulo = encodeURIComponent(document.title); //título
  var linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url="+url+"&title="+titulo;
  
  //tenta obter o conteúdo da meta tag description
  var summary = document.querySelector("meta[name='description']");
  summary = (!!summary)? summary.getAttribute("content") : null;
  
  //se a meta tag description estiver ausente...
  if(!summary){
      //...tenta obter o conteúdo da meta tag og:description
      summary = document.querySelector("meta[property='og:description']");
      summary = (!!summary)? summary.getAttribute("content") : null;
  }
  //altera o link do botão
  linkedinLink = (!!summary)? linkedinLink + "&summary=" + encodeURIComponent(summary) : linkedinLink;
  document.getElementById("linkedin-share-btt").href = linkedinLink;
}, false);