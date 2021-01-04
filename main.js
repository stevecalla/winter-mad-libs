
//create variables
var targetWriteButton = document.querySelector('.write-button');
var clearStoryButton = document.querySelector('.clear-story-button');
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
var storyNoun1 = document.querySelector('#noun1Text');
var storyPlace1 = document.querySelector('#place1Text');
var storyNum1 = document.querySelector('#num1Text');
var storyNoun2 = document.querySelector('#noun2Text');
var storyVerb1 = document.querySelector('#verb1Text');
var storyClothing1 = document.querySelector('#clothing1Text');
var storyClothing2 = document.querySelector('#clothing2Text');
var storyBeverage1 = document.querySelector('#beverage1Text');
var storyFood1 = document.querySelector('#food1Text');
var storyArray = [];

//create event listener(s)
targetWriteButton.addEventListener('click', writeStory);
clearStoryButton.addEventListener('click', clearStory);

//create functions
function writeStory() {
    var dataModel = gatherDataModel(); 
    alertNoInput(dataModel);
    console.log(dataModel);
    completeStory(dataModel);
};
function clearStory() {
    showInputForm();
    hideStory();
    clearInputForm();
};
function hideInputForm() {
    targetForm.classList.add('hidden');
};
function showInputForm() {
    targetForm.classList.remove('hidden');
};
function showStory() {
    targetStoryText.classList.remove('hidden');
};
function hideStory() {
    targetStoryText.classList.add('hidden');
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
function saveStories(dataModel) {
    storyArray.push(dataModel);
    // console.log(storyArray);
};
function alertNoInput(dataModel) {
    if (
        `${dataModel.inputNoun1}` === "" 
        // ||
        // `${dataModel.inputPlace1}` === "" ||
        // `${dataModel.inputnum1}` === "" ||
        // `${dataModel.inputNoun2}` === "" ||
        // `${dataModel.inputVerb1}` === "" ||
        // `${dataModel.inputClothing1}` === "" ||
        // `${dataModel.inputClothing21}` === "" ||
        // `${dataModel.inputBeverage1}` === "" ||
        // `${dataModel.inputFood1}` === ""
        )
        {
            return alert('Enter Value Please');
        } else {
            hideInputForm();
            showStory();
            saveStories(dataModel);
        }; 
    };
 function clearInputForm() {
    console.log('yes');
    inputFormNoun1.value = "";
    inputFormPlace1.value = "";
    inputFormNum1.value = "";
    inputFormNoun2.value = "";
    inputFormVerb1.value = "";
    inputFormClothing1.value = "";
    inputFormClothing2.value = "";
    inputFormBeverage1.value = "";
    inputFormFood1.value = "";
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
//2) Target ids in the story text                           DONE
//3) Create function to replace story test with innertext   DONE
//4) Create Data Model structure                            DONE

//Add clear story button                                    DONE                  
//1) Add clear button in story block HTML
//2) Add target variable for clear button
//3) Add event listener for clear button
//4) Add function for clear button to hide story/show form
//5) test

//Save stories to array                                     DONE
//1) create save story empty array
//2) create function to add stories to array
//3) call function when write story button clicked

//Ensure all input boxes are full                           DONE
//1) research options. plan approach.
//2) show alert box if input box not full
//3) build function to determine if box not full
//4) add alert box to function
//5) move add/remove to the else of alert box

//Clear input boxes after user returns from story           DONE
//1) research options. plan approach.
//2) create function to set .value = "" when user hits clear
//3) test
//4) ensure saved story array still entact/has content

//Fix bug - saves story array when input boxes not full     DONE
//1) determine approach
//2) move save story function into the alert no input else block
//3) test

//---------------CSS FOPRMATTING------------
//Adjust font to something fun
//1) Add font to global body of CSS                         DONE

//Center content in middle of page
//1) Display flex at highest level                          DONE
//2) Set height / width                                     DONE
//3) set flex direction to column                           DONE
//4) set align items/align content                          DONE

//Add color to background
//1) find fun color for background                          DONE
//2) find fun color for main box                            DONE

//Add image to background
//1) Add box shadow to wrapper box                          DONE
//2) Add image based on winter theme                        DONE

//Unhide story box for formatting work                      DONE
//Add background image to story box                         DONE
//Remove body background image                              DONE

//Formating input box to match story box                    DONE
//Make span font red                                        DONE
//set default values for input box                          DONE
//Add google font for story                                 DONE



//Adjust font to something from google super fun
//Add media queries?
//Add local storagee?