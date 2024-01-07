let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10;
let trueAnswer = 0;
let storage = window.localStorage;
function myFunction() {
  a1 = document.getElementById("mainText1").value;
  a2 = document.getElementById("mainText2").value;
  a3 = document.getElementById("mainText3").value;
  a4 = document.getElementById("mainText4").value;
  a5 = document.getElementById("mainText5").value;
  a6 = document.getElementById("mainText6").value;
  a7 = document.getElementById("mainText7").value;
  a8 = document.getElementById("mainText8").value;
  a9 = document.getElementById("mainText9").value;
  a10 = document.getElementById("mainText10").value;

  if (a1 == "5") {
    trueAnswer++;
  }
  if (a2 == "4") {
    trueAnswer++;
  }
  if (a3 == "6") {
    trueAnswer++;
  }
  if (a4 == "1") {
    trueAnswer++;
  }
  if (a5 == "8") {
    trueAnswer++;
  }
  if (a6 == "2") {
    trueAnswer++;
  }
  if (a7 == "3") {
    trueAnswer++;
  }
  if (a8 == "7") {
    trueAnswer++;
  }
  if (a9 == "10") {
    trueAnswer++;
  }
  if (a10 == "9") {
    trueAnswer++;
  }

  storage.setItem("t1010", trueAnswer);
  storage.setItem("ck1010", 1);
}

let sk1010 = setInterval(function () {
  if (
    storage.getItem("ck3") == 1 &&
    storage.getItem("ck4") == 1 &&
    storage.getItem("ck6") == 1 &&
    storage.getItem("ck9") == 1 &&
    storage.getItem("ck66") == 1 &&
    storage.getItem("ck77") == 1 &&
    storage.getItem("ck88") == 1 &&
    storage.getItem("ck99") == 1 &&
    storage.getItem("ck1010") == 1
  ) {
    document.querySelector("#next").href = "finish.html";
    document.querySelector("#next").classList.remove("submit_disabled");
  }
  if (storage.getItem("ck1010") == 1) {
    document.getElementById("checked").classList.add("submit_disabled");
    document.getElementById("checked").disabled = true;
    document.querySelector(".task1010").innerHTML =
      "Правильных ответов: " + storage.getItem("t1010") + "/10";
    clearInterval(sk1010);
  }
}, 100);
