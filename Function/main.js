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
    let inputArray = input.split(" ");

    while (inputArray.length>1) {
        for (var n=0; n<inputArray.length; n++) {
            switch(inputArray[n]) {
            case "*":
            var subCalculation = parseInt(inputArray[n-1]) * parseInt(inputArray[n+1]);
            inputArray.splice(n-1, 3, subCalculation);
            var n=0;
            break;
            case "/":
            var subCalculation = parseInt(inputArray[n-1]) / parseInt(inputArray[n+1]);
            inputArray.splice(n-1, 3, subCalculation);
            var n=0;
            }
        }
        for (var i=0; i<inputArray.length; i++) {
            switch(inputArray[i]) {
            case "+":
            var subCalculation = parseInt(inputArray[i-1]) + parseInt(inputArray[i+1]);
            inputArray.splice(i-1, 3, subCalculation);
            var i=0;
            break;
            case "-":
            var subCalculation = parseInt(inputArray[i-1]) - parseInt(inputArray[i+1]);
            inputArray.splice(i-1, 3, subCalculation);
            var i=0;
            }
        }
    }
    document.getElementById("p1").innerHTML = inputArray;
}


   /* the original stepping-stone code which only completes 2-integer calculation
    if (plusOperator.test(input)) { //saved copy of original 2integer addition
        let listOfNumbers = input.split("+");
        addition = () => parseInt(listOfNumbers[0]) + parseInt(listOfNumbers[1]);
        if (`${addition()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
        } else document.getElementById("p1").innerHTML = addition();
    } else if (minusOperator.test(input)) {
        let listOfCharacters = input.split("-");
        subtraction = () => parseInt(listOfCharacters[0])-parseInt(listOfCharacters[1]);
        if (`${subtraction()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        } else document.getElementById("p1").innerHTML = subtraction();
    } 
    else if (multiplicationOperator.test(input)) {
        let listOfCharacters = input.split("*");
        multiplication = () => parseInt(listOfCharacters[0])*parseInt(listOfCharacters[1]);
        if (`${multiplication()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        } else document.getElementById("p1").innerHTML = multiplication();
    } 
    else if (divisionOperator.test(input)) {
        let listOfCharacters = input.split("/");
        division = () => parseInt(listOfCharacters[0])/parseInt(listOfCharacters[1]);
        remainder = () => parseInt(listOfCharacters[0])%parseInt(listOfCharacters[1]);
        if (`${division()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`;
        }else document.getElementById("p1").innerHTML =`The answer is ${division()} with the remainder of ${remainder()}`;
    } 
    else alert `Please enter no more than 2 integers and an operator.` //error message for when there is no operator
} */