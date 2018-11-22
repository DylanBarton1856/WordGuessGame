// Name promt
// var name = prompt("What is your name?");
// console.log("Hello" + name);
// document.getElementById("name").innerHTML = name;

// variables for win, loss, attempts left
        var wins = 0; //wins
        var losses = 0;  //losses
        var attemptsLeft = 10; //attempts left to guess
    
// Word List
    var words =
        [
        "volkswagen",
        "ferrari",
        "toyota",
        "mercedes",
        "bmw",
        "porche",
        "ford",
        "chevrolet",
        "nissan",
        "honda",
        ];

// game start
// function startGame() {      
    
// Arrays to control word gen.
        var currentWord = []; //current display of word to guess
        var answer = []; //answer/generated word
        var userAttempts = []; //show letters guessed
            answer = words [Math.floor(Math.random() * words.length)]; //random word selection
            console.log (answer);

// Spliting answer into currentWord and adding _ _ _ _ 
        currentWord = answer.split("_");
        for (var i = 0; i < answer.length; i++) {
            currentWord[i] = '_';
            console.log (currentWord);

    }
// HTML info    
    document.getElementById("answer").innerHTML = currentWord;
    document.getElementById("attempts").innerHTML = attemptsLeft;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;

// onkeydown function
    document.onkeydown = function KeyPress(event) {
    var letterGuess = event.key.toLocaleLowerCase();  
    console.log (event);

// check letterGuess against answer
var possibilites = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < answer.length; i++) {
    
        if (letterGuess === answer[i]) {
            currentWord.splice(i, 1, letterGuess);
            document.getElementById('answer').innerHTML = currentWord;
            }
        }
        if (letterGuess !== answer[i]) {
            userAttempts.push(letterGuess);
            attemptsLeft--; // fix! always deducts.
            document.getElementById('userGuess').innerHTML = userAttempts;
            document.getElementById('attempts').innerHTML = attemptsLeft;
        }


// win or lose
// // when user loses
//     if (attempts === 0){
//     alert('Game Over Correct word was '+ answer);
//        losses++;
//        attempts = 10;
//        startGame();
    
// }

// // when user wins
        
//         alert("CORRECT! Try another word");
//            wins++; 
//            attempts = 10;
//            startGame();
//         }
    }
    

    