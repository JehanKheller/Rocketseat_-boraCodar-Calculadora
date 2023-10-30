var operatorState = new Boolean(false);
var operatorValue = '';

function ClearDisplayResult() {
  resultado.innerHTML = '0';
  resultado_historico.innerHTML = '0';
  operatorState = false;
  operatorValue = '';

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
  var total = resultado_historico.innerHTML;

  if (total) {
    const findTerm = (term) => {
      if (total.includes(term)) {
        return total;
      }
    }

    switch (total) {
      case findTerm("-"):
        resultado.innerHTML = parseFloat(total) - parseFloat(resultado.innerHTML);
        break

      case findTerm("+"):
        resultado.innerHTML = parseFloat(total) + parseFloat(resultado.innerHTML);
        break

      case findTerm("x"):
        resultado.innerHTML = parseFloat(total) * parseFloat(resultado.innerHTML);
        break

      case findTerm("÷"):
        resultado.innerHTML = parseFloat(total) / parseFloat(resultado.innerHTML);
        break
    }
  }
  else {
    resultado.innerHTML = 'ERROR!';
  }
}

function Insert(numero) {
  if (resultado.innerHTML == '0') {
    resultado.innerHTML = '';
  }

  resultado.innerHTML = resultado.innerHTML + numero;

  if (operatorState == true) {
    resultado.innerHTML = '';
    resultado.innerHTML = resultado.innerHTML + numero;
    operatorState = false;
  }
  
  if (operatorValue == '=') {
    operatorValue = '';
    resultado_historico.innerHTML = '0';
    resultado.innerHTML = '';
    resultado.innerHTML = resultado.innerHTML + numero;
  }

  CharacterLimit();
  DisplayFormat();
}

function InsertOperator(operator) {
  operatorValue = operator;
  
  if (resultado_historico.innerHTML == '0') {
    resultado_historico.innerHTML = '';
    resultado_historico.innerHTML = resultado.innerHTML + operator;
  }
  else if (resultado_historico.innerHTML != '0' && resultado.innerHTML != '0') {
    resultado_historico.innerHTML = resultado_historico.innerHTML + resultado.innerHTML + operator;
  }
  
  if (operator == '=') {
    Calcular();
  }

  operatorState = true;

  CharacterLimit();
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
  // Cria uma variável (obj) que recebe um seletor (#resultado).
  let obj = document.querySelectorAll("#resultado");
  
  obj.forEach((txt) => {
    let textC = txt.textContent;
    let txtFormated = textC.substr(0, 11);
    txt.innerHTML = txtFormated;
  });
}