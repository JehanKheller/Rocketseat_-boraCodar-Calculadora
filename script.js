function ClearAllOperation() {
  resultado.innerHTML = '0';
  resultado_historico.innerHTML = '0';

  DisplayFormat();
}

function Backspace() {
  var result = resultado.innerHTML;
  resultado.innerHTML = result.substring(0, result.length - 1);

  if (result.length == 1) {
    resultado.innerHTML = '0';
  }

  DisplayFormat();
}

// Formata o tamanho da fonte caso o elemento p (#resultado) receba mais ou menos de 8 dígitos.
function DisplayFormat() {
  if (resultado.innerHTML.length > 8) {
    resultado.setAttribute("style", "font-size: 36px");
  }
  if (resultado.innerHTML.length <= 8) {
    resultado.setAttribute("style", "font-size: 48px");
  }
}

// Limita a quantidade máxima de caracteres que o elemento p (#resultado) pode receber.
function CharacterLimit() {
  // Cria uma variável (obj) que recebe a classe (#resultado).
  let obj = document.querySelectorAll("#resultado");
  
  obj.forEach((txt) => {
    let txtContent = txt.textContent;
    let txtFormated = txtContent.substr(0, 11)
    txt.innerHTML = txtFormated;
  });
}

