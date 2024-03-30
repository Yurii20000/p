// number
let arrNumberCalc =  document.querySelectorAll(".number");

// sing & input
let inputIn = document.querySelector(".inputIn");
let clean = document.querySelector(".clean");
let cleanOne = document.querySelector(".cleanOne");
let plusOrMinus = document.querySelector(".plusOrMinus");
let plurar = document.querySelector(".plurar");
let division = document.querySelector(".division");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
let point = document.querySelector(".point");
let equal = document.querySelector(".equal");
let sum = [];

clean.onclick = function() {
   inputIn.innerHTML = "";
   sum.length = 0;
}

cleanOne.onclick = function() {
    let inInnerHtml = inputIn.innerHTML;
    inputIn.innerHTML = inInnerHtml.substring(0, inInnerHtml.length-1);
}

plusOrMinus.onclick = function() {
    let inInnerHtml = inputIn.innerHTML;
    let oneSimfol = inInnerHtml[0];
    if (oneSimfol != "-") {
        inputIn.innerHTML = "-" + inInnerHtml;
    } else if (oneSimfol == "-"){
        inputIn.innerHTML = inInnerHtml.substring(1);
    }
}


// вывод чисел 
for (let i = 0; i < 10; i++) {
    arrNumberCalc[i].onclick = function() {
        inputIn.innerHTML = inputIn.innerHTML + i;
     }

}

// point
point.onclick = function() {
    let searchPoint = inputIn.innerHTML.indexOf(".");
    if (searchPoint == -1 && inputIn.innerHTML.length != 0) {
        inputIn.innerHTML = inputIn.innerHTML + ".";
    }
}

// calc
 plus.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
    sum.push("+");
    inputIn.innerHTML = "";
 }

 minus.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
    sum.push("-");
    inputIn.innerHTML = "";
 }

 plurar.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
    sum.push("*");
    inputIn.innerHTML = "";
 }

 division.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
    sum.push("/");inputIn.innerHTML = "";
 }
 
 equal.onclick = function() {
    sum.push(parseFloat(inputIn.innerHTML));
      let num = 0;
   while(sum.length > 1) {
        switch(sum[1]) {
            case "+": num = sum[0] + sum[2]; sum.splice(0, 3, num); break;
            case "-": num = sum[0] - sum[2]; sum.splice(0, 3, num); break;
            case "/": num = sum[0] / sum[2]; sum.splice(0, 3, num); break;
            case "*": num = sum[0] * sum[2]; sum.splice(0, 3, num); break;
        }
    }
    inputIn.innerHTML = sum[0];
    sum = [];
 }