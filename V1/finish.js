let storage = window.localStorage;
if (storage.getItem("ck3") == 1 && storage.getItem("ck4") == 1 && storage.getItem("ck6") == 1 && storage.getItem("ck9") == 1 && storage.getItem("ck66") == 1 && storage.getItem("ck77") == 1 && storage.getItem("ck88") == 1 && storage.getItem("ck99") == 1 && storage.getItem("ck1010") == 1) 
{
document.querySelector(".t").innerHTML = "В третьем задании вы набрали " + storage.getItem("t3") + "/33 " + "баллов.";
document.querySelector(".f").innerHTML = "В четвертом задании вы набрали " + storage.getItem("t4") + "/11 " + "баллов.";
document.querySelector(".s").innerHTML = "В шестом задании вы набрали " + storage.getItem("t6") + "/19 " + "баллов.";
document.querySelector(".se").innerHTML = "В седьмом задании вы набрали " + storage.getItem("t9") + "/15 " + "баллов.";
document.querySelector(".n").innerHTML = "В девятом задании вы набрали " + storage.getItem("t66") + "/14 " + "баллов.";
if (storage.getItem("t77") == "1") {
    document.querySelector(".ten").innerHTML = "В десятом задании вы ответили ВЕРНО!";
} else {
    document.querySelector(".ten").innerHTML = "В десятом задании вы ответили НЕВЕРНО!";
}
if (storage.getItem("t88") == "1") {
    document.querySelector(".el").innerHTML = "В одиннадцатом задании вы ответили ВЕРНО!";
} else {
    document.querySelector(".el").innerHTML = "В одиннадцатом задании вы ответили НЕВЕРНО!";
}
if (storage.getItem("t99") == "1") {
    document.querySelector(".tw").innerHTML = "В двенадцатом задании вы ответили ВЕРНО!";
} else {
    document.querySelector(".tw").innerHTML = "В двенадцатом задании вы ответили НЕВЕРНО!";
}
document.querySelector(".three").innerHTML = "В тринадцатом задании вы набрали " + storage.getItem("t1010") + "/10 " + "баллов.";
}
