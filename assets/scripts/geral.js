function setResultValue() {
  if (document.getElementById("entrada").value != null) {
    document.getElementById("result").innerHTML =
      document.getElementById("entrada").value;
  }else{
    document.getElementById("entrada").value="Insere Um Valor Valido!"
  }
}

function clearScrean() {
  document.getElementById("result").innerHTML = document.getElementById(
    "entrada"
  ).value = "";
}
