/* intitial function should simply accept input from the local site and return the sum as an alert
*/
/* input will be received through the window prompt and a message with the calculated result will be output.*/
/* figure out how to accept any of the four operators (one operator max) to calculate the answer by identifying an operator
using the test function on the input string and then executing the correct function DONE*/
//fix the input and output prompts to read the results on the page
//accept unlimited number of integers
//design goals TBD
//FINISH LINE FOR BASE PROJECT
//BONUS: store previous answers and allow user to call on previous results for future calculations
let values = document.getElementById("totalInput");

function ultimateCalculator() {
var plusOperator = /\+/;
var minusOperator = /\-/;
var multiplicationOperator = /\*/;
var divisionOperator = /\//;
if (plusOperator.test(values)) {
        let arr = values.split("+");
        addition = () => parseInt(arr[0])+parseInt(arr[1]);
        if (addition() === "NaN") {
            alert `The answer is go fuck yourself.`;
        } else alert(`The answer is ${addition()}`);
    } else if (minusOperator.test(values)) {
        let arr = values.split("-");
        subtraction = () => parseInt(arr[0])-parseInt(arr[1]);
        alert(`The answer is ${subtraction()}`);
    } else if (multiplicationOperator.test(values)) {
        let arr = values.split("*");
        multiplication = () => parseInt(arr[0])*parseInt(arr[1]);
        alert(`The answer is ${multiplication()}`);
    } else if (divisionOperator.test(values)) {
        let arr = values.split("/");
        division = () => parseInt(arr[0])/parseInt(arr[1]);
        remainder = () => parseInt(arr[0])%parseInt(arr[1]);
        alert(`The answer is ${division()} with the remainder of ${remainder()}`);
    } alert `Please enter no more than 2 integers and an operator.`
}




