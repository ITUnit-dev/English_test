let available = document.querySelector("#available");
let availability = document.querySelector("#availability");
let install = document.querySelector("#install");
let installed = document.querySelector("#installed");
let installing = document.querySelector("#installing");
let installation = document.querySelector("#installation");
let operate = document.querySelector("#operate");
let operated = document.querySelector("#operated");
let operating = document.querySelector("#operating");
let operation = document.querySelector("#operation");
let operational = document.querySelector("#operational");
let operative = document.querySelector("#operative");
let operator = document.querySelector("#operator");
let maintain = document.querySelector("#maintain");
let maintained = document.querySelector("#maintained");
let maintaining = document.querySelector("#maintaining");
let maintenance = document.querySelector("#maintenance");
let capable = document.querySelector("#capable");
let capability = document.querySelector("#capability");
let capably = document.querySelector("#capably");
let technical = document.querySelector("#technical");
let technically = document.querySelector("#technically");
let technician = document.querySelector("#technician");
let technics = document.querySelector("#technics");
let question = document.querySelector("#question");
let questionable = document.querySelector("#questionable");
let able = document.querySelector("#able");
let enable = document.querySelector("#enable");
let strength = document.querySelector("#strength");
let strengthen = document.querySelector("#strengthen");
let value = document.querySelector("#value");
let valuable = document.querySelector("#valuable");
let valueless = document.querySelector("#valueless");

let task3 = document.querySelector(".task3");

let count = 0;
let storage = window.localStorage;
function myFunction() {
  document.getElementById("checked").disabled = true;

  for (let i = 0; i < 9; i++) {
    if (available.options[i].selected)
      if (available.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (availability.options[i].selected)
      if (availability.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (install.options[i].selected)
      if (install.options[i].value == "глагол") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (installed.options[i].selected)
      if (
        installed.options[i].value == "причастие 2" ||
        installed.options[i].value == "глагол в Past Simple"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (installing.options[i].selected)
      if (
        installing.options[i].value == "причастие 1" ||
        installing.options[i].value == "герундий"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (installation.options[i].selected)
      if (installation.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operate.options[i].selected)
      if (operate.options[i].value == "глагол") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operated.options[i].selected)
      if (
        operated.options[i].value == "причастие 2" ||
        operated.options[i].value == "глагол в Past Simple"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operating.options[i].selected)
      if (
        operating.options[i].value == "причастие 1" ||
        operating.options[i].value == "герундий"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operation.options[i].selected)
      if (operation.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operational.options[i].selected)
      if (operational.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operative.options[i].selected)
      if (
        operative.options[i].value == "прилагательное" ||
        operative.options[i].value == "существительное"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (operator.options[i].selected)
      if (operator.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (maintain.options[i].selected)
      if (maintain.options[i].value == "глагол") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (maintained.options[i].selected)
      if (
        maintained.options[i].value == "причастие 2" ||
        maintained.options[i].value == "глагол в Past Simple"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (maintaining.options[i].selected)
      if (
        maintaining.options[i].value == "причастие 1" ||
        maintaining.options[i].value == "герундий"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (maintenance.options[i].selected)
      if (maintenance.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (capable.options[i].selected)
      if (capable.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (capability.options[i].selected)
      if (capability.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (capably.options[i].selected)
      if (capably.options[i].value == "наречие") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (technical.options[i].selected)
      if (technical.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (technically.options[i].selected)
      if (technically.options[i].value == "наречие") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (technician.options[i].selected)
      if (technician.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (technics.options[i].selected)
      if (technics.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (question.options[i].selected)
      if (
        question.options[i].value == "существительное" ||
        question.options[i].value == "глагол"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (questionable.options[i].selected)
      if (questionable.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (able.options[i].selected)
      if (able.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (enable.options[i].selected)
      if (enable.options[i].value == "глагол") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (strength.options[i].selected)
      if (strength.options[i].value == "существительное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (strengthen.options[i].selected)
      if (strengthen.options[i].value == "глагол") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (value.options[i].selected)
      if (
        value.options[i].value == "существительное" ||
        value.options[i].value == "глагол"
      )
        count++;
  }
  for (let i = 0; i < 9; i++) {
    if (valuable.options[i].selected)
      if (valuable.options[i].value == "прилагательное") count++;
  }
  for (let i = 0; i < 9; i++) {
    if (valueless.options[i].selected)
      if (valueless.options[i].value == "прилагательное") count++;
  }

  //console.log(count);
  storage.setItem("t3", count);
  storage.setItem("ck3", 1);
}
let sk33 = setInterval(function () {
  //console.log(storage.getItem("ck3"))
  if (storage.getItem("ck3") == 1) {
    document.getElementById("checked").classList.add("submit_disabled");
    document.getElementById("checked").disabled = true;
    task3.innerHTML = "Правильных ответов: " + storage.getItem("t3") + "/33";
    clearInterval(sk33);
  }
}, 100);
