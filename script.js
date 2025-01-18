// create a list of all the buttons
const buttonsList = document.querySelectorAll(".BUTTONS");
const removeBtn = document.querySelector("#btn-remove");
const equalBtn = document.querySelector("#btn-equal");
const calcScreen = document.querySelector("#calc-screen h2");

const operators = ["+","-","*","/"];


// add click event for every button
for (let i = 0; i < buttonsList.length; i ++){
    buttonsList[i].addEventListener("click",() => {
        // check that last character is not an operator
        let str = calcScreen.textContent;
        let lastChar = str[str.length-1];

        // if pressed button is an operator and last character is also operator
        if (isOperator(buttonsList[i].textContent) && isOperator(lastChar)) {
            
            // if pressed button is not same as last operator
            if (buttonsList[i].textContent !== lastChar){
                str = str.slice(0,str.length - 1);
                calcScreen.textContent = str;
            } else {
                return;
            }
        }


        calcScreen.textContent = `${calcScreen.textContent}${buttonsList[i].textContent}`;
    });
}

removeBtn.addEventListener("click",remove);
equalBtn.addEventListener("click",writeToScreen);


function remove(){
    let str = calcScreen.textContent;
    str = str.slice(0,str.length - 1);
    calcScreen.textContent = str;
}

function writeToScreen(){

    // check that last character is not an operator
    let str = calcScreen.textContent;
    let lastChar = str[str.length-1];

    if (isOperator(lastChar)) {
        str = str.slice(0,str.length - 1);
        calcScreen.textContent = str;
        return;
    }

    // store expression value in x
    let x = eval(calcScreen.textContent);

    if (Number.isInteger(x)){
        calcScreen.textContent = eval(calcScreen.textContent);
    } else {
        calcScreen.textContent = eval(calcScreen.textContent).toFixed(2);
    }
}

function isOperator(value){
    for (const op of operators){
        if (op === value){
            return true;
        }
    }
    return false;
}

