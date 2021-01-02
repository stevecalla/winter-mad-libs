
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
var inputFormFood1 = document.querySelector('#food1');=
var storyNoun1 = document.querySelector('#noun1Text');
var storyPlace1 = document.querySelector('#place1Text');
var storyNum1 = document.querySelector('#num1Text');
var storyNoun2 = document.querySelector('#noun2Text');
var storyVerb1 = document.querySelector('#verb1Text');
var storyClothing1 = document.querySelector('#clothing1Text');
var storyClothing2 = document.querySelector('#clothing2Text');
var storyBeverage1 = document.querySelector('#beverage1Text');
var storyFood1 = document.querySelector('#food1Text');

//create event listener(s)
targetWriteButton.addEventListener('click', writeStory);

//create functions
function writeStory() {
    hideInputForm();
    showStory();
    var dataModel = gatherDataModel(); 
    console.log(dataModel);
    completeStory(dataModel); 
};
function hideInputForm() {
    targetForm.classList.add('hidden');
};
function showStory() {
    targetStoryText.classList.remove('hidden');
};
function gatherDataModel() {
    var inputData = {
        inputNoun1: inputFormNoun1.value,
        inputPlace1: inputFormPlace1.value,
        inputNum1: inputFormNum1.value,
        inputNoun2: inputFormNoun2.value, 
        inputVerb1: inputFormVerb1.value,
        inputClothing1: inputFormClothing1.value,
        inputClothing2: inputFormClothing2.value,
        inputBeverage1: inputFormBeverage1.value,
        inputFood1: inputFormFood1.value,
    }
    return inputData;    
};
function completeStory(dataModel) {
    storyNoun1.innerText = `${dataModel.inputNoun1}`; 
    storyPlace1.innerText = `${dataModel.inputPlace1}`; 
    storyNum1.innerText = `${dataModel.inputNum1}`; 
    storyNoun2.innerText = `${dataModel.inputNoun2}`; 
    storyVerb1.innerText = `${dataModel.inputVerb1}`; 
    storyClothing1.innerText = `${dataModel.inputClothing1}`; 
    storyClothing2.innerText = `${dataModel.inputClothing2}`; 
    storyBeverage1.innerText = `${dataModel.inputBeverage1}`; 
    storyFood1.innerText = `${dataModel.inputFood1}`; 
};


//Step-by-Step
//Target, listen, act on write button click
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

//Insert input values into story
//1) How to do it? Review HTML. Plan approach               DONE
//2) Target ids in the story text
//3) Create function to replace story test with innertext
//4) Create Data Model structure