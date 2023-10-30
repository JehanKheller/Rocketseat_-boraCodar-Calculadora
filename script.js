function ClearDisplayResult() {
  resultado.innerHTML = '0';

  DisplayFormat();
}

function Backspace() {
  var result = resultado.innerHTML;
  resultado.innerHTML = result.substring(0, result.length - 1);

  if (result.length == 1) {
    resultado.innerHTML = '0';
  }

  DisplayFormat()
}

function Calcular() {
  var total = resultado.innerHTML;

  if (total) {
    resultado.innerHTML = eval(total);
  }
  else {
    resultado.innerHTML = 'ERROR!';
  }
}

function Insert(num) {
  var result;

  if (resultado.innerHTML == '0') {
    resultado.innerHTML = '';
  }

  result = resultado.innerHTML;
  resultado.innerHTML = result + num;

  CharacterLimit();
  DisplayFormat();
}

function DisplayFormat() {
  if (resultado.innerHTML.length > 8) {
    resultado.setAttribute("style", "font-size: 36px");
  }
  if (resultado.innerHTML.length <= 8) {
    resultado.setAttribute("style", "font-size: 48px");
  }
}

// Limita a quantidade de caracteres digitados.
function CharacterLimit() {
  // Cria uma variável (obj) que recebe um seletor (#resultado).
  let obj = document.querySelectorAll("#resultado");
  
  obj.forEach((txt) => {
    let textC = txt.textContent;
    let txtFormated = textC.substr(0, 11);
    txt.innerHTML = txtFormated;
  });
}