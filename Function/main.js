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

function ultimateCalculator() {
    let input = document.getElementById("totalInput").value;
    var plusOperator = /\+/;
    var minusOperator = /\-/;
    var multiplicationOperator = /\*/;
    var divisionOperator = /\//;

    if (plusOperator.test(input)) {
        let listOfNumbers = input.split("+");
        addition = () => parseInt(listOfNumbers[0]) + parseInt(listOfNumbers[1]) + parseInt(listOfNumbers[2]);
        if (`${addition()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
        } else document.getElementById("p1").innerHTML = addition();
    } 
    else if (minusOperator.test(input)) {
        let listOfNumbers = input.split("-");
        subtraction = () => parseInt(listOfNumbers[0])-parseInt(listOfNumbers[1]);
        if (`${subtraction()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        } else document.getElementById("p1").innerHTML = subtraction();
    } 
    else if (multiplicationOperator.test(input)) {
        let listOfNumbers = input.split("*");
        multiplication = () => parseInt(listOfNumbers[0])*parseInt(listOfNumbers[1]);
        if (`${multiplication()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        } else document.getElementById("p1").innerHTML = multiplication();
    } 
    else if (divisionOperator.test(input)) {
        let listOfNumbers = input.split("/");
        division = () => parseInt(listOfNumbers[0])/parseInt(listOfNumbers[1]);
        remainder = () => parseInt(listOfNumbers[0])%parseInt(listOfNumbers[1]);
        if (`${division()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        }else document.getElementById("p1").innerHTML =`The answer is ${division()} with the remainder of ${remainder()}`;
    } 
    else alert `Please enter no more than 2 integers and an operator.` //error message for when there is no operator
}
