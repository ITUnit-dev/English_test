let a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14;
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
  a11 = document.getElementById("mainText11").value;
  a12 = document.getElementById("mainText12").value;
  a13 = document.getElementById("mainText13").value;
  a14 = document.getElementById("mainText14").value;

  if (a1 == "1") {
    trueAnswer++;
  }
  if (a2 == "2") {
    trueAnswer++;
  }
  if (a3 == "4") {
    trueAnswer++;
  }
  if (a4 == "5") {
    trueAnswer++;
  }
  if (a5 == "6") {
    trueAnswer++;
  }
  if (a6 == "7") {
    trueAnswer++;
  }
  if (a7 == "8") {
    trueAnswer++;
  }
  if (a8 == "9") {
    trueAnswer++;
  }
  if (a9 == "10") {
    trueAnswer++;
  }
  if (a10 == "11") {
    trueAnswer++;
  }
  if (a11 == "12") {
    trueAnswer++;
  }
  if (a12 == "13") {
    trueAnswer++;
  }
  if (a13 == "16") {
    trueAnswer++;
  }
  if (a14 == "17") {
    trueAnswer++;
  }

  storage.setItem("t66", trueAnswer);
  storage.setItem("ck66", 1);
}

let sk66 = setInterval(function () {
  //console.log(storage.getItem("ck66"))
  if (storage.getItem("ck66") == 1) {
    document.getElementById("checked").classList.add("submit_disabled");
    document.getElementById("checked").disabled = true;
    document.querySelector(".task66").innerHTML =
      "Правильных ответов: " + storage.getItem("t66") + "/14";
    clearInterval(sk66);
  }
}, 100);
