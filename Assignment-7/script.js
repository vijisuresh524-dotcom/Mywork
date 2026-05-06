let firstNumber = "";
let secondNumber = "";
let currentoperator = "";

function number(num){
    if (currentoperator === ""){
        firstNumber += num;
      document.getElementById("display").value = firstNumber;
    }
    else{
        secondNumber += num;
        document.getElementById("display").value = secondNumber;
    }
}

function dot(){
    if (currentoperator === ""){
        if (!firstNumber.includes(".")){
            firstNumber += ".";
            document.getElementById("display").value = firstNumber;
        }
        else{
         if (!secondNumber.includes(".")){
            secondNumber += ".";
            document.getElementById("display").value = secondNumber;
         }
        }
    }
}
function operator(op) {
    if (firstNumber !== "") {
        currentoperator = op; 
    }
}

function calculate(){
    let result = 0;
    let a = parseFloat(firstNumber);
    let b = parseFloat(secondNumber);

    if (currentoperator === "+"){
        result = a + b;
     }
     else if (currentoperator === "-"){
        result = a - b;
     }
     else if (currentoperator === "*"){
        result = a * b;
    }
    else if(currentoperator === "/"){
        result = a / b;
    }
    else if (currentoperator === "%"){
        result = a % b;
    }
    else if (currentoperator === "√"){
        result = a ** (1/2);
    }
    else if (currentoperator === "x³" ){
        result = a * a * a;
    }
    document.getElementById("display").value = result;
}
function cleardisplay(){
    firstNumber = "";
    secondNumber = "";
    currentoperator = "";
    document.getElementById("display").value = "";
}

