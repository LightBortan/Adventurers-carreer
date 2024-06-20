let fightMobs = []; //list for all mobs in the curren fight queue
let kar;            //character object
let eventlog = [];  //list of all possible events
let globalXP = 0;   //xp granted on combat end

//player dies
function playerDies(){
    attackBtn.style.display = "none";
    defendBtn.style.display = "none";
    runBtn.style.display = "none";
    resetBtn.style.display = "flex";
    resetMob();
    document.getElementById("log").innerHTML = "You died";
}

//combat ends for some reason
function endCombat(){
    kar.addXp(globalXP);
    globalXP = 0;
    kar.defendpower = 0;
    fightMobs = [];
    attackBtn.style.display = "none";
    defendBtn.style.display = "none";
    runBtn.style.display = "none";
    adventureBtn.style.display = "flex";
    restBtn.style.display = "flex";
    charUpdate();
    document.getElementById("char_defpower").style.display = "none";
    document.getElementById("backgroundImage").style.backgroundImage = "url(../image-zone/village.jpg)";
    document.getElementById("monster1").style.display = "none";
    document.getElementById("monster2").style.display = "none";
    resetMob();
}

function startUp (){
    kar = new createCharacter();
    charUpdate(); 
    atriUpdate();
    document.getElementById("char_defpower").style.display = "none";
    document.getElementById("monster1").style.display = "none";
    document.getElementById("monster2").style.display = "none";
}

startUp();
