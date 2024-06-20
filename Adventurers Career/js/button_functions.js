//starts a new adventure
adventureBtn.onclick = function() {
    restBtn.style.display = "none";
    adventureBtn.style.display = "none";
    attackBtn.style.display = "flex";
    defendBtn.style.display = "flex";
    runBtn.style.display = "flex";
    createEventLog()
    document.getElementById("backgroundImage").style.backgroundImage = "url(../image-zone/forest.jpeg)";
    let chosenEvent = choseEvent()
    if (chosenEvent.eventMobs.length === 2){
        document.getElementById("monster2").style.display = "initial";
    }
    document.getElementById("log").innerHTML = chosenEvent.eventText;
    if (chosenEvent.eventMobs.length > 0){
        fightMobs = chosenEvent.eventMobs;
        mobUpdate();
    }
}

//player rests
restBtn.onclick = function (){
    kar.currentHitPoints = kar.maxHitPoints;
    charUpdate();
}

//player attacks
attackBtn.onclick = function () {
    fightMobs[0].damageMob(kar.attack);
    if (fightMobs[0].currentHitPoints > 0){
        kar.damageChar(fightMobs[0].attack)
        if (kar.currentHitPoints <= 0){
            playerDies();
        }
    } else{
        globalXP += ((fightMobs[0].currentLevel * 5)/kar.currentLevel)
        document.getElementById("monster2").style.display = "none";
        fightMobs.shift();
    }
    if (kar.defendpower > 0){
        kar.defendpower -= 1;
    }
    if (fightMobs.length !== 0){

        updateCombat();
        mobUpdate();
    } else {
        endCombat();
    }
}

//player defends
defendBtn.onclick = function (){
    kar.defendpower += 2;
    kar.damageChar(fightMobs[0].attack)
    if (kar.currentHitPoints < 0){
        playerDies();
    }
    updateCombat();
}

//player runs
runBtn.onclick = function (){
    globalXP = 0;
    document.getElementById("log").innerHTML = "You ran away succesfully";
    endCombat();
}

//game reset
resetBtn.onclick = function (){
    resetBtn.style.display = "none";
    adventureBtn.style.display = "flex";
    restBtn.style.display = "flex";
    startUp();
}

//ups the hp by 5 for every attribute point
hpUpBtn.onclick = function (){
    kar.attributePoints -= 1;
    kar.maxHitPoints +=5;
    kar.currentHitPoints +=5;
    charUpdate();
    atriUpdate();
}

attUpBtn.onclick = function (){
    kar.attributePoints -= 1;
    kar.attack +=1;
    charUpdate();
    atriUpdate();
}

defUpBtn.onclick = function(){
    kar.attributePoints -= 1;
    kar.defense += 1;
    charUpdate();
    atriUpdate();
}