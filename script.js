var nomi = ["Emanuel", "Mario", "Paolo", "Daniele", "Iva"];

document.getElementById('my_button').addEventListener("click", displayNames);

function displayNames() {
  for (var i = 0; i < nomi.length; i++) {
    document.getElementById('text').innerHTML += "<li>" + nomi[i] + "</li>";
  }
};

//ticket: ma se volessi stamparli su p id="text"? usare innerHTML += anzichè solo =
