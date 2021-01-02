
//create variables
var targetWriteButton = document.querySelector('.write-button');
var targetForm = document.querySelector('.form');
var targetStoryText = document.querySelector('.story');
var inputFormNoun1 = document.querySelector('#noun1');
var inputFormPlace1 = document.querySelector('#place1');
var inputFormNum1 = document.querySelector('#num1');
var inputFormNoun2 = document.querySelector('#noun2');
var inputFormVerb1 = document.querySelector('#verb1');
var inputFormClothing1 = document.querySelector('#clothing1');
var inputFormClothing2 = document.querySelector('#clothing2');
var inputFormBeverage1 = document.querySelector('#beverage1');
var inputFormFood1 = document.querySelector('#food1');


//create event listeners
targetWriteButton.addEventListener('click', writeStory);

//create functions
function writeStory() {
    console.log('yes');
    targetForm.classList.add('hidden');
    targetStoryText.classList.remove('hidden');  
    gatherInput();  
};
function gatherInput() {
    var inputNoun1 = inputFormNoun1.value;
    var inputPlace1 = inputFormPlace1.value;
    var inputNum1 = inputFormNum1.value; 
    var inputNoun2 = inputFormNoun2.value; 
    var inputVerb1 = inputFormVerb1.value;
    var inputClothing1 = inputFormClothing1.value;
    var inputClothing2 = inputFormClothing2.value;
    var inputBeverage1 = inputFormBeverage1.value;
    var inputFood1 = inputFormFood1.value; 
    console.log(inputNoun1);
    console.log(inputPlace1);
    console.log(inputNum1);
    console.log(inputNoun2);
    console.log(inputVerb1);
    console.log(inputClothing1);
    console.log(inputClothing2);
    console.log(inputBeverage1);
    console.log(inputFood1);
};


//Step-by-Step
//target, listen, act on write button click
//1) target input value form                                DONE
//2) create function to hide input boxes                    DONE
//3) target write story button                              DONE        
//4) create event listener for write story button           DONE
//5) test that input boxes disappear when button clicked    DONE
//6) target story text                                      DONE
//7) make story text appear when write story button clicked DONE

//Get Input Values
//1) target input value ids                                 DONE
//2) write function to collect input values                 DONE