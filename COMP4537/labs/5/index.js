function checkData() {
  let name = document.getElementById("name").value;
  let score = parseInt(document.getElementById("score").value);

  if (name != null && !isNaN(score)) {
    sendInfo();
  }
  else {
    window.alert("Check your data and try again.");
  }
}

function sendInfo() {
  const xhttp = new XMLHttpRequest();
  let name = document.getElementById("name").value;
  let score = parseInt(document.getElementById("score").value);
  xhttp.open("GET", "https://rocky-temple-74799.herokuapp.com/?name=" + name + "&score=" + score , true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.alert(name + ":" + score + " was stored in the DB");
    }
  };
}


