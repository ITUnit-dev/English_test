let be_1 = document.querySelector("#be_1");
let be_2 = document.querySelector("#be_2");
let set_1 = document.querySelector("#set_1");
let set_2 = document.querySelector("#set_2");
let exercises_1 = document.querySelector("#exercises_1");
let exercises_2 = document.querySelector("#exercises_2");
let including_1 = document.querySelector("#including_1");
let including_2 = document.querySelector("#including_2");
let are_1 = document.querySelector("#are_1");
let are_2 = document.querySelector("#are_2");
let Executing_1 = document.querySelector("#Executing_1");
let Executing_2 = document.querySelector("#Executing_2");
let receive_1 = document.querySelector("#receive_1");
let receive_2 = document.querySelector("#receive_2");
let pursue_1 = document.querySelector("#pursue_1");
let pursue_2 = document.querySelector("#pursue_2");
let pursuing_1 = document.querySelector("#pursuing_1");
let pursuing_2 = document.querySelector("#pursuing_2");
let have_1 = document.querySelector("#have_1");
let have_2 = document.querySelector("#have_2");
let develop_1 = document.querySelector("#develop_1");
let develop_2 = document.querySelector("#develop_2");

let task4 = document.querySelector(".task4");

let count = 0;
let storage = window.localStorage;
function myFunction() {
  if (be_1.value == "инфинитив" && be_2.value == "сказуемое") count++;
  if (set_1.value == "инфинитив" && set_2.value == "обстоятельство") count++;
  if (exercises_1.value == "глагол" && exercises_2.value == "сказуемое")
    count++;
  if (including_1.value == "герундий" && including_2.value == "обстоятельство")
    count++;
  if (are_1.value == "эквивалент модального глагола" && are_2.value == "-")
    count++;
  if (
    Executing_1.value == "причастие 1" &&
    Executing_2.value == "обстоятельство"
  )
    count++;
  if (receive_1.value == "инфинитив" && receive_2.value == "обстоятельство")
    count++;
  if (pursue_1.value == "инфинитив" && pursue_2.value == "сказуемое") count++;
  if (pursuing_1.value == "герундий" && pursuing_2.value == "обстоятельство")
    count++;
  if (have_1.value == "эквивалент модального глагола" && have_2.value == "-")
    count++;
  if (develop_1.value == "инфинитив" && develop_2.value == "обстоятельство")
    count++;

  storage.setItem("t4", count);
  storage.setItem("ck4", 1);
}
let sk44 = setInterval(function () {
  if (storage.getItem("ck4") == 1) {
    document.getElementById("checked").classList.add("submit_disabled");
    document.getElementById("checked").disabled = true;
    task4.innerHTML = "Правильных ответов: " + storage.getItem("t4") + "/11";
    clearInterval(sk44);
  }
}, 100);
