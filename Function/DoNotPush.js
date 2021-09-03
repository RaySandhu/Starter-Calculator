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
        function addition2() {
            for(let i=0; i<listOfNumbers.length; i++) {
                parseInt(listOfNumbers[i]);
            }
            for (let a=0; a<listOfNumbers.length; a+=2) {
                if ((listOfNumbers[a]+listOfNumbers[a+1]) === null) {
                    return listOfNumbers[a]
                } else return listOfNumbers[a]+listOfNumbers[a+1]
            }            
        }
        addition = () => parseInt(listOfNumbers[0])+parseInt(listOfNumbers[1]);
        if (`${addition()}` === "NaN") {
            alert `Looks like you have a hard time following instructions, fam.`; //accounts for edge case error message where the operator is present but the input is invalid
        } else document.getElementById("p1").innerHTML = addition();
    } 
}