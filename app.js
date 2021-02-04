function provjeri(input) {
  var input = document.getElementById("unos");
  var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var krivo = document.getElementById("krivo");
  var textgreske = document.getElementById("greska");
  if (input.value.match(format)) {
    console.log("E-mail je ispravan!");
    krivo.style.visibility = "hidden";
    textgreske.style.display = "none";
  } else {
    console.log("E-mail nije ispravan!");
    krivo.style.visibility = "visible";
    textgreske.style.display = "block";
  }
}

provjeri();
