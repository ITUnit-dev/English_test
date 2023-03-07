let a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15;
let trueAnswer = 0;
let storage = window.localStorage;

function myFunction(){
    a1= document.getElementById("mainText1").value;
    a2= document.getElementById("mainText2").value;
    a3= document.getElementById("mainText3").value;
    a4= document.getElementById("mainText4").value;
    a5= document.getElementById("mainText5").value;
    a6= document.getElementById("mainText6").value;
    a7= document.getElementById("mainText7").value;
    a8= document.getElementById("mainText8").value;
    a9= document.getElementById("mainText9").value;
    a10= document.getElementById("mainText10").value;
    a11= document.getElementById("mainText11").value;
    a12= document.getElementById("mainText12").value;
    a13= document.getElementById("mainText13").value;
    a14= document.getElementById("mainText14").value;
    a15= document.getElementById("mainText15").value;


    if (a1 == "8")
    {
        trueAnswer++;
    }
    if (a2 == "6")
    {
        trueAnswer++;
    }
    if (a3 == "1")
    {
        trueAnswer++;
    }
    if (a4 == "10")
    {
        trueAnswer++;
    }
    if (a5 == "14")
    {
        trueAnswer++;
    }
    if (a6 == "2")
    {
        trueAnswer++;
    }
    if (a7 == "9")
    {
        trueAnswer++;
    }
    if (a8 == "15")
    {
        trueAnswer++;
    }
    if (a9 == "3")
    {
        trueAnswer++;
    }
    if (a10 == "7")
    {
        trueAnswer++;
    }
    if (a11 == "12")
    {
        trueAnswer++;
    }
    if (a12 == "4")
    {
        trueAnswer++;
    }
    if (a13 == "11")
    {
        trueAnswer++;
    }
    if (a14 == "13")
    {
        trueAnswer++;
    }
    if (a15 == "5")
    {
        trueAnswer++;
    }

    storage.setItem("t9", trueAnswer);
    storage.setItem("ck9", 1);
}

let sk99 = setInterval(function ()
{
    //console.log(storage.getItem("ck9"))
   if (storage.getItem("ck9") == 1) 
   {
    document.getElementById("checked").classList.add("submit_disabled");
    document.getElementById('checked').disabled = true;
    document.querySelector(".task9").innerHTML = "Правильных ответов: " + storage.getItem("t9") + "/15";
    clearInterval(sk99);
   }
}, 100)