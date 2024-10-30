var spans = 0, bossHp, myHp, time, mode, timemode, totaltime, damage, hit, correct, combo, score, myTime, gameend;
var words = document.querySelector(".words");
var health = document.querySelector(".health");
var myhealth = document.querySelector(".myhealth");

var mainmenu = document.getElementById("mainmenu");
var preload = document.getElementById("preload");
var level = document.getElementById("level");
var statusmode = document.getElementById("statusmode");
var startdelay = document.getElementById("startdelay");
var game = document.getElementById("game");
var gamewin = document.getElementById("gamewin");
var gameover = document.getElementById("gameover");
var gamebox = document.getElementById("gamebox");

var monster_start = document.getElementById("monster-start");
var monster_die = document.getElementById("monster-die");
var player_start = document.getElementById("player-start");
var player_die = document.getElementById("player-die");

var myword = document.getElementById("myword");
var timestatus = document.getElementById("timestatus");
var updatecombo = document.getElementById("updatecombo");
var updatescores = document.getElementById("updatescores");
var updatescore = document.getElementById("updatescore");
var scoreboard = document.getElementById("score");

var updatepoints = document.getElementById('updatedpoints')

var current_mode;
var playerDamaged = false; // Flag to track if player was damaged
var bossDamaged = false; // Flag to track if boss was damaged

// Add these variables at the top of your file with the other declarations
var lastPlayerHp = 100;
var lastBossHp = 100;

// Add this function near the top of your game.js file
function initializeGameState() {
    // Hide all screens except the main menu
    game.style.display = "none";
    gamewin.style.display = "none";
    gameover.style.display = "none";
    scoreboard.style.display = "none";
    mainmenu.style.display = "block";
}

// Call this function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeGameState);

//Change mode
function rightChange() {
    mode = statusmode.getAttribute('mode');
    if(mode == 'easy') {
        statusmode.setAttribute('mode','medium');
        statusmode.innerHTML = "Medium";
    }
    if(mode == 'medium') {
        statusmode.setAttribute('mode','hard');
        statusmode.innerHTML = "Hard";
    }
    if(mode == 'hard') {
        statusmode.setAttribute('mode','easy');
        statusmode.innerHTML = "Easy";
    }
}

//Set Game
function setGame() {
    mymonster = Math.floor(Math.random()*1000)%5;
    bossHp = 10;
    health.style.width = 100 + "%";
    myHp = 100;
    myhealth.style.width = 100 + "%";
    hit = 0;
    combo = 0;
    score = 0;
    console.log("setGame:" + updatecombo.innerHTML)
    gameend = false;
    updatecombo.style.color = "white";
    updatecombo.innerHTML = 0;
    updatescore.innerHTML = 0;  
    updatescores.innerHTML = 0;  
    

    monster_start.src = "./img/Mons" + mymonster + ".gif";
    monster_die.src = "./img/Mons" + mymonster + "-die.gif";
    
    monster_die.style.display = "none";
    monster_start.style.display = "block";
    player_die.style.display = "none";
    player_start.style.display = "block";

    myword.style.display = "block";
    timestatus.style.display = "block";
}

//Set Mode Game
function setMode(mode) {
    mode = (mode == undefined) ? "easy": (mode == "easy") ? "medium": (mode == "medium") ? "hard": "easy";
    if(mode == "easy") {
        timemode = 5;
        damage = 10;
        current_mode = 0
    }
    else if(mode == "medium") {
        timemode = 4;
        damage = 15;
        current_mode = "medium"
        getPoints(current_mode)
    }
    else if(mode == "hard") {
        timemode = 3;
        damage = 20;
        current_mode = "hard"
        getPoints(current_mode)
    }
    totaltime = timemode;
    delayStart();
}

//Random Word


function random() {
    // Clear the previous question and answer
    words.innerHTML = "";
    correct = 0;

    // Get a random index based on the wordlist length
    var randomIndex = Math.floor(Math.random() * wordlist.length);

    // Get the random question and answer from the wordlist
    var randomQuestion = wordlist[randomIndex].question;
    var randomAnswer = wordlist[randomIndex].answer.split("");

    window.answerCopy = randomAnswer.slice();
    // Display the question
    document.getElementById('question-text').innerHTML = randomQuestion;

    // Display a partially hidden answer with blanks represented by underscores
    for (var i = 0; i < randomAnswer.length; i++) {
        var span = document.createElement("span");
        span.classList.add("span");

        // Partially hide letters, e.g., reveal every second letter, others are blank
        if (Math.random() > 0.5) {  // Randomly hide or reveal letters
            span.innerHTML = randomAnswer[i];
        } else {
            span.innerHTML = "_"; // Use an underscore for hidden letters
        }

        words.appendChild(span);
    }
    
    spans = document.querySelectorAll(".span");
    // Adjust total time based on the length of the answer
    totaltime = timemode * Math.floor(randomAnswer.length / 3);
    if (totaltime === 0) {
        totaltime = timemode;
    }
}

function typing(e) {
    if (e.key.length > 1) {
        return;  // If the key pressed is not a single character, ignore it
    }

    typed = e.key; // Capture the typed key
    console.log("Key pressed:", typed); // Debug log
    
    if (gameend) {
        return;
    }
   
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].innerHTML === typed || window.answerCopy[i] === typed) {
            if (spans[i].classList.contains("bg")) {
                continue;
            } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
                spans[i].classList.add("bg");
                
                if (spans[i].innerHTML === "_") {
                    spans[i].innerHTML = typed;
                }
                
                console.log("Correct input detected");
                game.classList.add("green-border");
                combo += 1;
                correct += 1;
                updatecombo.innerHTML = combo;

                setTimeout(function() {
                    game.classList.remove("green-border");
                }, 500);
                break;
            }
        } else if (spans[i].innerHTML !== typed || spans[i].innerHTML === "_") {
            if (spans[i].classList.contains("bg")) { 
                continue;
            } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
                console.log("Incorrect input detected");
                game.classList.add("red-border");
                combo = 0;
                //bawas buhay pag typo
                if(current_mode === "medium"){
                    myHp -= 1;
                    myhealth.style.width = myHp + "%";
                }else if(current_mode === 'hard'){  
                    myHp -= 2;
                    myhealth.style.width = myHp + "%";
                }

                setTimeout(function() {
                    game.classList.remove("red-border");
                }, 500);
                break;
            }
        }
    }

    var checker = 0;
    for (var j = 0; j < spans.length; j++) {
        if (spans[j].className === "span bg") {
            checker++;
        }
        if (checker === spans.length) {
            hit = 1;
            score += Math.floor(correct*(Math.floor(combo/10)*0.5 + 1));
            console.log(score);
            updatescore.innerHTML = score;
            console.log("update:" + updatescore.innerHTML)
            updatescores.innerHTML = score;
            console.log("update:" + updatescores.innerHTML)

            document.removeEventListener("keydown", typing, false);
            setTimeout(function(){
                words.className = "words"; // restart the classes
                random(); // give another word
                time = totaltime + 1;
                hit = 0;
                document.addEventListener("keydown", typing, false);
            }, 400);
            bossHp -= 10;
            health.style.width = bossHp + "%";
        }
    }

    hue = Math.floor(combo/10) * 30;
    if (hue === 0) {
        updatecombo.style.color = "white";
    } else {
        updatecombo.style.color = "hsl(" + hue + ", 100%, 50%)";
    }
    updatecombo.innerHTML = combo;
}


//Check Hp
function check() {
    if (bossHp <= 0) {
        monster_start.style.display = "none";
        monster_die.style.display = "block";
        setTimeout(() => {
            showGameOver(true);
        }, 2000);
        return;
    }
    else if (myHp <= 0) {
        player_start.style.display = "none";
        player_die.style.display = "block";
        setTimeout(() => {
            showGameOver(false);
        }, 2000);
        return;
    }

    // Check for boss damage
    if (bossHp < lastBossHp) {
        monster_start.classList.add('shake-animation');
        setTimeout(() => {
            monster_start.classList.remove('shake-animation');
        }, 1000);
        lastBossHp = bossHp;
    }

    // Check for player damage
    if (myHp < lastPlayerHp) {
        player_start.classList.add('shake-animation');
        game.classList.add('red-flash');
        setTimeout(() => {
            player_start.classList.remove('shake-animation');
            game.classList.remove('red-flash');
        }, 1000);
        lastPlayerHp = myHp;
    }

    requestAnimationFrame(check);
}

//Time
function countdown() {
    time = totaltime;
    cd = setInterval(
        function(){
            if (time >= 0) {
                time--;
                updateTime();
            }
            else{
                clearInterval(cd);
            }
        }
        ,1000);
}

//Show time and check time = 0 to random new word
function updateTime() {
    theTime.innerText = time;
    if (time <= 0 && hit == 0) {
        myHp -= damage;
        myhealth.style.width = myHp + "%";
        combo = 0;
        updatecombo.innerHTML = combo;
        updatecombo.style.color = "white";
        random();
        time = totaltime + 1;
    }
}

function shakeElement(element) {
    element.classList.remove('shake');
    void element.offsetWidth; // Trigger reflow
    element.classList.add('shake');
    setTimeout(() => {
        element.classList.remove('shake');
    }, 500);
}

function inflictDamageToBoss() {
    // Call this function when the player successfully inflicts damage to the boss
    bossHp -= 10; // Example damage amount

    // Only shake the boss if they take damage
    if (bossHp > 0) { // Check if boss is still alive
        if (!bossDamaged) { // Only shake if not already shaking
            bossDamaged = true; // Set the flag
            shakeElement(monster_start);
            setTimeout(() => {
                bossDamaged = false; // Reset the flag after shaking
            }, 500); // Duration should match the animation duration
        }
    }
}


//Delay before start
function delayStart() {
    var firstdelay = 2;
    level.style.display = "none";
    mainmenu.style.display = "none";
    gamebox.style.display = "none";
    gamewin.style.display = "none";
    gameover.style.display = "none";
    game.style.display = "block";
    startdelay.style.display = "block";
    ds = setInterval(
        function(){
            if (firstdelay <= 0) {
                clearInterval(ds);
                startGame();
                startdelay.style.display = "none";
                gamebox.style.display = "block";
                startdelay.innerText = 3;
            }
            else{
                startdelay.innerText = firstdelay;
                firstdelay -= 1;
            }
        }
        ,1000);
}

//StartGame
function startGame() {
    scoreboard.style.display = "block";
    setGame();
    random();
    check();
    countdown();
    updateTime();
}

mainmenu.style.display = "block";
//Set to Menu
function menuGame() {

    game.style.display = "none";
    gamewin.style.display = "none";
    gameover.style.display = "none";
    scoreboard.style.display = "none";
    mainmenu.style.display = "block";
    level.style.display = "block";
    
    // Reset game state
    bossHp = 100;
    myHp = 100;
    score = 0;
    combo = 0;
    gameend = false;
    
    // Reset UI elements
    health.style.width = "100%";
    myhealth.style.width = "100%";
    updatecombo.innerHTML = "0";
    updatescore.innerHTML = "0";
    
    // Reset player and monster images
    player_start.style.display = "block";
    player_die.style.display = "none";
    monster_start.style.display = "block";
    monster_die.style.display = "none";
}

document.addEventListener("keydown", typing, false);

function showGameOver(isWin) {
    // Hide all game elements
    game.style.display = "none";
    scoreboard.style.display = "none";
    mainmenu.style.display = "none";
    level.style.display = "none";

    // Show the appropriate end screen

    if (isWin) {
            gamewin.style.display = "flex";
            gameover.style.display = "none";
        
    } else {
        gamewin.style.display = "none";
        gameover.style.display = "flex";
    }

    // Update the final score
    document.querySelectorAll('.scoreEnd span').forEach(span => {
        span.textContent = getScore(mode);
    });
    document.querySelectorAll('.scorePoints span').forEach(span => {
        span.textContent = getPoints(mode);
    });

    window.parent.postMessage({
        type: "gathered-points",
        py_data:{
            points: getPoints(mode)
        }
    } , "*")

    console.log('here')

    gameend = true;
    clearInterval(cd);
}

function getScore(mode) {
    if(current_mode === 'medium'){
        
        return score + ' + 100pts';
    }else if(mode === 'hard') {
        return score + ' + 500pts'
    }
    return score;
}

function getPoints(mode){
   const points = Math.floor(score/50)
    if(current_mode === 'medium'){
        const points = Math.floor((score + 100)/50)
        return points
    }else if(mode === 'hard') {
        const points = Math.floor((score + 500)/50)
        return points
    }
    return points;
}





