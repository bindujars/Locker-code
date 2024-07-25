var screen = document.getElementById("bckgnd");

function btnClick(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function findResult() {
  if (screen.value != "1234") {
    alert("Wrong pin number. Please try again.");
    return false;
  } else {
    alert("Login is successful!");
    return true;
  }
}
