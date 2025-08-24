/* JavaScript for Simple Hangman Game
   Author: Naim Zulkipli <naim@amz.com.my>
   Date: Feb 9th, 2023
*/

let questions = [];
//load questions and clues from questions.json file
fetch('js/questions.json')
    .then(response => response.json())
    .then(data => {
        questions.push(...data);
    });

let revealedLetters = 0;

/* retrieves a random question */
function getRandomQuestion() {
    return questions[Math.floor(Math.random() * questions.length)];
}


/* function to draw empty tiles according to the length of the question */
function drawEmptyTiles(question) {
    // Create an empty container for the tiles
    let tilesContainer = document.getElementById("questionTile");
    
    // Create a tile for each letter in the question
    for (let i = 0; i < question.length; i++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.innerHTML = "<span class='letter'></span>";
        
        tilesContainer.appendChild(tile);
    }
}


/* function to decrease the red heart if an incorrect letter is clicked */
function decreaseHeart(){
    let hearts = document.querySelectorAll(".fas"), x = hearts.length;

    if (hearts.length > 0) {
        let i = hearts.length - 1;
        hearts[i].classList.remove("fas");
        hearts[i].classList.add("far");
    }

    $("#face img").attr("src","img/b"+x+".png");
    
    if (hearts.length === 1) {
        let keys = document.querySelectorAll(".key");
        for (let button of keys) {
            button.setAttribute("disabled", true);
        }
        swal("AWWWW!", "You've run out of lives!", "error");
    }
}


/* function to draw the virtual keyboard */
const keyboard = document.getElementById("keyboard");
const letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
let x = 1;
letters.split("").forEach(function(letter) {
    const button = document.createElement("button");
    button.classList.add("key");
    button.innerHTML = letter;
    keyboard.appendChild(button);
    if(x == 10){
        const brk = document.createElement("br");
        keyboard.appendChild(brk);
    } else if(x == 19){
        const brk = document.createElement("br");
        keyboard.appendChild(brk);
    }
    x++;
});


/* function to check if word has been fully revealed */
function checkFinish(question){
    if(revealedLetters === question.length){
        let keys = document.querySelectorAll(".key");
        
        for (let button of keys) {
            button.setAttribute("disabled", "");
        }
        /*document.getElementById("hearts").innerHTML = "CONGRATULATIONS! YOU WON!";*/
        $("#face img").attr("src","img/b8.png");
        swal("Congratulations!", "You found the answer!", "success");
    }
}


/* function to bind click event to keys and reveal letters */
function revealLetter(question) {
    // Get a reference to the tiles container
    let tilesContainer = document.getElementById("questionTile");
    
    // Create an array to store the tiles
    let tiles = [];
    for (let i = 0; i < tilesContainer.children.length; i++) {
        tiles.push(tilesContainer.children[i]);
    }
    
    // Add a click event listener to each letter key
    let keys = document.querySelectorAll(".key");
    for (let i = 0; i < keys.length; i++) {
        keys[i].addEventListener("click", function() {
            // Get the clicked letter
            let letter = this.innerHTML;

            //check all occurences of the clicked letter
            let index = 0;
            let flag = 0;
            while (index !== -1) {
                index = question.indexOf(letter, index);
                if (index !== -1) {
                    tiles[index].innerHTML = letter;
                    index += 1;
                    flag = 1;
                    revealedLetters += 1;
                }
            }

            if(flag == 0){
                //if no letter is found, decrease the heart
                decreaseHeart();
            } else {
                //if letter is revealed, check if word is completed
                checkFinish(question);
            }
            
            // Disable the clicked key
            this.setAttribute("disabled", "true");
        });
    }
}

const currentQuestion = getRandomQuestion();
drawEmptyTiles(currentQuestion.word);
const cluebox = document.getElementById("questionClue");
cluebox.innerHTML = "Hint: " + currentQuestion.clue;
revealLetter(currentQuestion.word);

document.getElementById("reload").addEventListener("click",function(){
    location.reload();
});