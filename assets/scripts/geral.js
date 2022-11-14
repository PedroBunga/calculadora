/*Estas Funções Servem para Capturar o Valor Presionado na Calculadora e concatenar ao Input existente 
  Isto se aplica tambem as operações*/
function isEmpty() {
  if (
    document.getElementById("entrada").value === "Insere Os Valores" ||
    document.getElementById("entrada").value === ""
  ) {
    return true;
  }
  return false;
}

function clicou_1() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "1");
  }
  return (document.getElementById("entrada").value += "1");
}

function clicou_2() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "2");
  }
  return (document.getElementById("entrada").value += "2");
}

function clicou_3() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "3");
  }
  return (document.getElementById("entrada").value += "3");
}

function clicou_4() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "4");
  }
  return (document.getElementById("entrada").value += "4");
}
function clicou_5() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "5");
  }
  return (document.getElementById("entrada").value += "5");
}
function clicou_6() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "6");
  }
  return (document.getElementById("entrada").value += "6");
}
function clicou_7() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "7");
  }
  return (document.getElementById("entrada").value += "7");
}
function clicou_8() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "8");
  }
  return (document.getElementById("entrada").value += "8");
}
function clicou_9() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "9");
  }
  return (document.getElementById("entrada").value += "9");
}

function clicou_0() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "0");
  }
  return (document.getElementById("entrada").value += "0");
}
function clicou_00() {
  if (document.getElementById("entrada").value === isEmpty()) {
    return (document.getElementById("entrada").value = "00");
  }
  return (document.getElementById("entrada").value += "00");
}
/*Capturando as operações escolhidas*/
function clicou_sum() {
  return (document.getElementById("entrada").value += "+");
}

function clicou_sub() {
  return (document.getElementById("entrada").value += "-");
}
function clicou_mult() {
  return (document.getElementById("entrada").value += "*");
}
function clicou_div() {
  return (document.getElementById("entrada").value += "/");
}

/*Estas funções Servem para capturar a operação escolhida e concatenar ao input existente*/

function resetInputValue() {
  return (document.getElementById("entrada").value = "");
}

function whatOperation(expressao) {
  let operatio = "";

  for (let i = 0; i < expressao.length; i++) {
    if (expressao[i] === "-") {
      operatio = "-";
    }
    if (expressao[i] === "+") {
      operatio = "+";
    }
    if (expressao[i] === "*") {
      operatio = "*";
    }
    if (expressao[i] === "/") {
      operatio = "/";
    }
  }

  return operatio;
}

function resultado() {
  let resultado_Final =0;
  let valo_Digitado = document.getElementById("entrada").value;
  let valorAtual = valo_Digitado.split(`{whatOperation(valo_Digitado)}`);

  if (whatOperation(valo_Digitado) === "+") {
    resultado_Final = parseInt(valorAtual[0]) + parseInt(valorAtual[1]);

  }

  if (isEmpty()) {
    return (document.getElementById("entrada").value = "Entrada Invalida!");
  }

  return (document.getElementById("result").innerHTML = valorAtual);
}
