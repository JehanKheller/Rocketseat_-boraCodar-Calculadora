function ClearDisplayResult() {
  resultado.innerHTML = '0';
}

function Backspace() {
  let result = resultado.innerHTML;
  resultado.innerHTML = result.substring(0, result.length - 1);

  if (result.length == 1) {
    resultado.innerHTML = '0';
  }
}

function Calcular() {
  var total = resultado.innerHTML;

  if (total) {
    resultado.innerHTML = eval(total);
  }
  else {
    resultado.innerHTML = '?';
  }
}

function Insert(num) {
  let result;

  if (resultado.innerHTML == '0') {
    resultado.innerHTML = '';
  }

  result = resultado.innerHTML;
  resultado.innerHTML = result + num;
}

