
function setResultValue() {
  if (document.getElementById("entrada").value != null) {
       document.getElementById("result").innerHTML=document.getElementById("entrada").value;
  }
}


function clearScrean(){
    document.getElementById("result").innerHTML=document.getElementById("entrada").value="";
}
