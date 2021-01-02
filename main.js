
//create variables
var targetForm = document.querySelector('.form');
var targetStoryText = document.querySelector('.story');
var targetWriteButton = document.querySelector('.write-button');

//create event listeners
targetWriteButton.addEventListener('click', writeStory);

//create functions
function writeStory() {
    console.log('yes');
    targetForm.classList.add('hidden');
    targetStoryText.classList.remove('hidden');    
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
//5) create function to show story upon button click