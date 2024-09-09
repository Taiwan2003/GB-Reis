const text = document.getElementById("text_header");
const nome = document.getElementById("name_perfil");

function updateText() {
  if (window.innerWidth <= 767) {
    // Alterar o texto do elemento quando a largura for menor ou igual a 767 pixels
    nome.innerText = "Gb Reis"
    text.innerText = "Sou tatuador desde janeiro de 2024 apaixonado pela arte, especialista no estilo lettering";
  } else {
    // Caso contrário, pode manter o texto original (ou outro texto)
    nome.innerText = "Eu sou Gabriel Reis Tatuador profissional"
    text.innerText = "Eu sou de são gonçalo e tenho uma verdadeira paixão por transformar ideias em arte permanente. Cada tatuagem que crio é única, refletindo a personalidade e a história de quem a usa. Para mim, não se trata apenas de marcar a pele, mas de criar uma conexão especial com meus clientes e fazer parte de um momento significativo em suas vidas. Com atenção aos detalhes e criatividade, busco sempre entregar um trabalho que seja uma verdadeira expressão de arte.";
  }
}

// Verifica o tamanho da tela ao redimensionar a janela
window.addEventListener('resize', updateText);

// Verifica o tamanho da tela quando a página é carregada
updateText();

function enviar(event){

  event.preventDefault();

  var nome = document.getElementById("input_name").value;
  var mensage = document.getElementById("input_mensage").value;

  if (nome === "" || mensage === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const texto = `Olá, meu nome é ${nome}. ${mensage}`;

  const url = `https://wa.me/5521964879674?text=${encodeURIComponent(texto)}`;

  window.open(url, '_self');
}

