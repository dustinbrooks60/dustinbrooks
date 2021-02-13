function checkData() {
  let name = document.getElementById("name").value;
  let score = parseInt(document.getElementById("score").value);

  if (name != null && !isNaN(score)) {
    sendInfo();
  }
  else {
    window.alert("Your score is not a number, try again.");
  }
}

function sendInfo() {
  const xhttp = new XMLHttpRequest();
  let name = document.getElementById("name").value;
  let score = parseInt(document.getElementById("score").value);
  xhttp.open("GET", "https://dustin-brooks-60.netlify.app/comp4537/labs/5/writedb/?name=" + name + "&score=" + score , true);
  xhttp.send(name, score);

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      window.alert(name + ":" + score + " was stored in the DB");
    }
  };
}




function retrieveInfo() {
  const xhttp = new XMLHttpRequest();
  let name = document.getElementById("name").value;
  let score = parseInt(document.getElementById("score").value);
  xhttp.open("GET", "https://dustin-brooks-60.netlify.app/comp4537/labs/5/writedb/?name=" + name + "&score=" + score , true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("data").innerHTML = this.responseText;
    }
  };
}
