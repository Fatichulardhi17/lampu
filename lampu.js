function saklar(action, lamp) {
  let toggle1 = document.getElementById("default-toggle1");
  let toggle2 = document.getElementById("default-toggle2");
  let toggle3 = document.getElementById("default-toggle3");

  let lampuON1 = document.getElementById("lampuON1");
  let lampuON2 = document.getElementById("lampuON2");
  let lampuON3 = document.getElementById("lampuON3");

  if (toggle1.checked) {
    lampuON1.src = "image/on.gif";
  } else {
    lampuON1.src = "image/off.gif";
  }
  if (toggle2.checked) {
    lampuON2.src = "image/on.gif";
  } else {
    lampuON2.src = "image/off.gif";
  }
  if (toggle3.checked) {
    lampuON3.src = "image/on.gif";
  } else {
    lampuON3.src = "image/off.gif";
  }
}
