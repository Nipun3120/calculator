var clearButton = document.querySelector(".clear-btn");
var numbers = document.querySelectorAll(".num-btn");
var operators = document.querySelectorAll(".opr-btn");
var equalsButton = document.querySelector(".eq-btn");

var firstDigit, anotherDigit, totalLen, operation, num1, num2;


//All crear Butoon
clearButton.addEventListener("click", function () {
    document.querySelector(".calc-screen").value=" ";
})


// assigning numbers to num1 and num2
numbers.forEach(assign);
function assign(number, index) {
    number.addEventListener("click", function () {
        document.querySelector(".calc-screen").value += (9 - index);
        if ((firstDigit != 0)&&(operation != " ")){
           anotherDigit=document.querySelector(".calc-screen").value;
           num2=+anotherDigit;
        }
    })
}

// selecting opeartions
operators.forEach(setOperation);
function setOperation(operator, index) {
    operator.addEventListener("click", function () {
        firstDigit = document.querySelector(".calc-screen").value;
        num1 = +firstDigit;
        
    operation = operator.innerHTML;
        document.querySelector(".calc-screen").value += operation;
        totalLen=document.querySelector(".calc-screen").value.length;
        
    })
}

// calculation
equalsButton.addEventListener("click", function () {
    if(operation == operators[3].innerHTML){
        document.querySelector(".calc-screen").value=num1+num2;
    }
    if(operation == operators[1].innerHTML){
        document.querySelector(".calc-screen").value=num1*num2;
    }
    if(operation == operators[2].innerHTML){
        document.querySelector(".calc-screen").value=num1-num2;
    }
    if(operation == operators[0].innerHTML){
        document.querySelector(".calc-screen").value=num1/num2;
    }

})


