const input = document.getElementsByTagName("input")[0];
const h2 = document.getElementsByTagName("h2")[1];

let thingsSaid = [];

function checkAvailibility(wordInputed){
    if(thingsSaid.includes(wordInputed)){
        return false;
    }
    else{
        return true;
    }
}

function wordAvailible(wordInputed){
    if(checkAvailibility(wordInputed)){
        h2.style.color = "green";
         h2.textContent = "Det går för sig!!!"
         return true;
    }
    else{
        h2.style.color = "red";
        h2.textContent = "Nej det går inte för sig! " + wordInputed + " var #" + findPlaceInList(wordInputed);

    }
}

function findPlaceInList(wordInputed){
   return thingsSaid.indexOf(wordInputed) +1;
}

input.addEventListener("input", () => {
    input.style.width = (input.value.length + 1) + "ch";
});

input.addEventListener("keydown", (event) =>{
    if(event.key === "Enter"){
        let wordInputed = input.value.toLowerCase().trim();
        if(wordAvailible(wordInputed)){
            thingsSaid.push(wordInputed);
        }

        input.value = "";
        input.style.width= "3ch";
    }
});