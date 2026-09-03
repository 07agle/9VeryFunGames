let currentNumberDisplay = document.getElementsByTagName("h1")[0];
let grassButton = document.getElementById("grassButton");
let brrrButton = document.getElementById("brrrButton");

let currentNumber = 2;
let gameRunning = true;
let brrrNow = false;
let buttonClicked = 1;

function calculateBrrr(){
    if(currentNumber % 3 == 0 || currentNumber.toString().includes("3")){
        brrrNow = true;
    }
    else{
        brrrNow = false;
    }
    return brrrNow;
}

function clickButton(){
   if(calculateBrrr() && buttonClicked == 0){
    currentNumber++;
    currentNumberDisplay.textContent = "Brrr";
   }
   else if(!calculateBrrr() &&buttonClicked == 1){
 currentNumber++;
    currentNumberDisplay.textContent = currentNumber - 1 + " Grässtrå";
   }
   else{
    currentNumber = 2;
    currentNumberDisplay.textContent = "1 Grässtrå";
   }
}

grassButton.onclick = () => {
    buttonClicked = 1;
    clickButton();
};
brrrButton.onclick = () => {
    buttonClicked = 0;
    clickButton();
};