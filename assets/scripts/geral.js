/*Estas Funções Servem para Capturar o Valor Presionado na Calculadora e concatenar ao Input existente 
  Isto se aplica tambem as operações*/
function getTecla(valor_da_tecla) {
  let tamanho_da_entrada = document.getElementById("entrada").value;
  if (tamanho_da_entrada.length === 31) {
    return;
  }
  return (document.getElementById("entrada").value += `${valor_da_tecla}`);
}
/*Capturando as operações escolhidas*/

function getOperation(operation) {
  return (document.getElementById("entrada").value += `${operation}`);
}

/*Estas funções Servem para capturar a operação escolhida e concatenar ao input existente*/

function resetInputValue() {
  document.getElementById("entrada").placeholder = "Insere a Operação";
  document.getElementById("entrada").value = "";
}
/* Esta Função verifica na string passada "input" qual é a operação que o usuario escolheu */
function whatOperation(expressao) {
  let operatio = "";
  for (let i = 0; i < expressao.length; i++) {
    if (expressao[i] === "-") {operatio = "-";}
    if (expressao[i] === "+") {operatio = "+";}
    if (expressao[i] === "*") {operatio = "*";}
    if (expressao[i] === "/") {operatio = "/";}
  }
  return operatio;
}

/* Função que Calcula o Resultado Final */
function resultado() {
  var resultado_Final = 0;
  let valo_Digitado = document.getElementById("entrada").value;
  let operacao = whatOperation(valo_Digitado);
  let valorAtual = valo_Digitado.split(`${operacao}`);

  if (operacao === "+") {
    resultado_Final = parseInt(valorAtual[0], 10) + parseInt(valorAtual[1], 10);
  } else {
    if (operacao === "*") {
      resultado_Final =
        parseInt(valorAtual[0], 10) * parseInt(valorAtual[1], 10);
    } else {
      if (operacao === "/" && valorAtual[1] > 0) {
        resultado_Final = parseFloat(
          parseInt(valorAtual[0], 10) / parseInt(valorAtual[1], 10)
        );
      } else {
        if (operacao === "-" && valorAtual[0] | (valorAtual[1] > 0)) {
          resultado_Final = parseFloat(
            parseInt(valorAtual[0], 10) - parseInt(valorAtual[1], 10)
          );
        }
      }
    }
  }

  if (
    document.getElementById("entrada").value === "" ||
    document.getElementById("entrada").value === null
  ) {
    return (document.getElementById("entrada").placeholder =
      "Entrada Invalida!");
  }

  return (document.getElementById("result").innerHTML = resultado_Final);
}
