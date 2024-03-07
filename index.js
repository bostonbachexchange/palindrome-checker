const displayValue = document.getElementById("result")
const button = document.getElementById("check-btn")
const inputValue = document.getElementById("text-input")

button.addEventListener("click", checkIfPalindrome)

function checkIfPalindrome () {
    const regex = /[a-zA-Z0-9]/g
    const filteredInput = inputValue.value.toLowerCase().match(regex)
    const strLength = filteredInput?.length


    function returnResult(){

        for(let i = 0; i < Math.ceil(strLength/2); i++){
            console.log("check: ", filteredInput[i], filteredInput[i] === filteredInput[strLength - i - 1])

            if(!(filteredInput[i] === filteredInput[strLength - i - 1])){
                displayValue.innerText = `${inputValue.value + " is not a palindrome"} ` 
                return 
            }
        }
        displayValue.innerText = `${inputValue.value + " is a palindrome"} ` 
    }

    if(inputValue.value == "") {
        alert("Please input a value");
        return
    } else {
        returnResult();
    }

}