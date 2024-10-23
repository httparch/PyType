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

var playerDamaged = false; // Flag to track if player was damaged
var bossDamaged = false; // Flag to track if boss was damaged

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
    bossHp = 100;
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
        timemode = 4;
        damage = 10;
    }
    else if(mode == "medium") {
        timemode = 3;
        damage = 15;
    }
    else if(mode == "hard") {
        timemode = 2;
        damage = 20;
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
    
    if (gameend) {
        return;
    }
   
    for (var i = 0; i < spans.length; i++) {

        if (spans[i].innerHTML === typed || window.answerCopy[i] === typed) { // Match either the revealed letter or the hidden one
            if (spans[i].classList.contains("bg")) { // If the letter is already typed, skip it
                continue;
            } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
                spans[i].classList.add("bg");
                
                if (spans[i].innerHTML === "_") {

                        spans[i].innerHTML = typed;  // Replace the underscore with the typed letter if correct
        
                }
                
                game.style.borderColor = "#8fff86";
                game.style.boxShadow = "0px 0px 40px #42f403";
                combo += 1;
                correct += 1;
                updatecombo.innerHTML = combo;

                setTimeout(function() {
                    game.style.borderColor = "#86d9ff";
                    game.style.boxShadow = "0px 0px 20px #03A9F4";
                }, 1000);
                break;
            }
        } else if (spans[i].innerHTML !== typed || spans[i].innerHTML === "_") {
            
            if (spans[i].classList.contains("bg")) { 
                continue;
            } else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
                game.style.borderColor = "#ff8686";
                game.style.boxShadow = "0px 0px 40px #f40303";
                combo = 0;
                
                setTimeout(function() {
                    game.style.borderColor = "#86d9ff";
                    game.style.boxShadow = "0px 0px 20px #03A9F4";
                }, 1000);
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
        myword.style.display = "none";
        timestatus.style.display = "none";
        scoreboard.style.display = "none";
        monster_start.style.display = "none";
        monster_die.style.display = "block";
        gameend = true;
        clearInterval(cd);
        setTimeout(function() {
            game.style.display = "none";
            gamewin.style.display = "block";
        }, 4000);
        bossHp = 100;
    }
    else if (myHp <= 0) {
        game.style.display = "none";
        scoreboard.style.display = "none";
        gameover.style.display = "block";
        player_start.style.display = "none";
        player_die.style.display = "block";
        gameend = true;
        clearInterval(cd);
        myHp = 100;
    }

        // Check for boss damage and apply shake once
        if (bossHp < 100 && !bossDamaged) {
            bossDamaged = true; // Set the flag
            monster_start.classList.add('shake');
            setTimeout(() => {
                monster_start.classList.remove('shake');
                bossDamaged = false; // Reset the flag after shaking
            }, 500); // Duration should match the animation duration
        }
    
        // Check for player damage and apply shake once
        if (myHp < 100 && !playerDamaged) {
            playerDamaged = true; // Set the flag
           player_start.classList.add('shake');
            setTimeout(() => {
                player_start.classList.remove('shake');
                playerDamaged = false; // Reset the flag after shaking
            }, 500); // Duration should match the animation duration
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

           // Only shake player if they take damage
           if (myHp > 0) { // Check if player is still alive
            if (!playerDamaged) { // Only shake if not already shaking
                playerDamaged = true; // Set the flag
                player_start.classList.add('shake');
                setTimeout(() => {
                    player_start.classList.remove('shake');
                    playerDamaged = false; // Reset the flag after shaking
                }, 500); // Duration should match the animation duration
            }
        }

        combo = 0;
        updatecombo.innerHTML = combo;
        
        updatecombo.style.color = "white";
        random();
        time = totaltime+1;
    }
}

function inflictDamageToBoss() {
    // Call this function when the player successfully inflicts damage to the boss
    bossHp -= 10; // Example damage amount

    // Only shake the boss if they take damage
    if (bossHp > 0) { // Check if boss is still alive
        if (!bossDamaged) { // Only shake if not already shaking
            bossDamaged = true; // Set the flag
            monster_start.classList.add('shake');
            setTimeout(() => {
                monster_start.classList.remove('shake');
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
    //document.body.style.backgroundImage = "url('./img/bg.jpg')";
    game.style.display = "none";
    gamewin.style.display = "none";
    gameover.style.display = "none";
    scoreboard.style.display = "none";
    mainmenu.style.display = "block";
    level.style.display = "block";
}

document.addEventListener("keydown", typing, false);
