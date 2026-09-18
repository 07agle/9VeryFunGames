const input = document.getElementsByTagName("input")[0]
const h2 = document.getElementsByTagName("h2")[1]
let questionNumber = 1;

input.addEventListener("input", () => {
    input.style.width = (input.value.length + 2) + "ch";
});

input.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        answerQuestion();
    }
})

function answerQuestion(){
    if(questionNumber === 1){
        h2.textContent = "Ja!";
        h2.style.color = "green";
        questionNumber++;
    }
    else if(questionNumber === 2){
        h2.textContent = "Nej!";
        h2.style.color = "red";
        questionNumber++;
    }
    else{
        h2.textContent= "Farfars kalsonger!";
        h2.style.color = "orange";
        questionNumber = 1;
    }
    input.value = "";
    input.style.width = "3ch";
}