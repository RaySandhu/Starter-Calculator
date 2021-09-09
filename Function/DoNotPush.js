//this document is to attempt a scalable version of the functional piece of the calculator
//continuing on goals from main; attempting to rewrite calculation function to accept infinite positive integers

function scalableCalculator() {
    let input = document.getElementById("totalInput").value;
    const plusOperator = /\+/;
    const minusOperator = /\-/;
    const multiplicationOperator = /\*/;
    const divisionOperator = /\//;



    if (plusOperator.test(input)) {
        let listOfNumbers = input.split("+");
        function addition() {
            for(let i=0; i<listOfNumbers.length; i++) {
                parseInt(listOfNumbers[i]);
            }
            for (let a=0; a<listOfNumbers.length; a+=2) {
                if ((listOfNumbers[a]+listOfNumbers[a+1]) === null) {
                    return listOfNumbers[a]
                } else return listOfNumbers[a]+listOfNumbers[a+1]
            }            
        }
        if (`${addition()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
        } else document.getElementById("p1").innerHTML = addition();
    } 
}



if (plusOperator.test(input)) { //saved copy of original 2integer addition
    let listOfNumbers = input.split("+");
    addition = () => parseInt(listOfNumbers[0]) + parseInt(listOfNumbers[1]) + parseInt(listOfNumbers[2]);
    if (`${addition()}` === "NaN") {
        alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
    } else document.getElementById("p1").innerHTML = addition();
} 

if (plusOperator.test(input)) {
    let listOfCharacters = input.split("+");
    function addition() {
        for(let i=0; i<listOfCharacters.length; i++) {
            let listOfNumbers = parseInt(listOfCharacters[i]);
        }
        for (let a=0; a<listOfNumbers.length; a+=2) {
            if ((listOfNumbers[a]+listOfNumbers[a+1]) === null) {
                return listOfNumbers[a];
            } else listOfNumbers[a]+listOfNumbers[a+1];
        }            
    } let sum = addition();
    if (`${addition()}` === "NaN") {
        alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
    } else document.getElementById("p1").innerHTML = addition();
}