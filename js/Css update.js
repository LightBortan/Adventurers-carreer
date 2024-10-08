function mobUpdate(){
    document.getElementById("mob-Name").innerHTML = fightMobs[0].mobName;
    document.getElementById("mob_level").innerHTML = fightMobs[0].currentLevel;
    document.getElementById("mob_hp").innerHTML = Math.ceil(fightMobs[0].currentHitPoints);
    document.getElementById("mob_att").innerHTML = fightMobs[0].attack;
    document.getElementById("mob_def").innerHTML = fightMobs[0].defense;
}

//refreshes combat after a turn
function updateCombat(){
    charUpdate();
    document.getElementById("mob_hp").innerHTML = Math.ceil(fightMobs[0].currentHitPoints);
    if (kar.defendpower > 0){
        chardef = document.getElementById("char_defpower").style.display = "flex";

        document.getElementById("char_defpower_value").innerHTML = kar.defendpower
    } else{
        chardef = document.getElementById("char_defpower").style.display = "none";

    }
    if (fightMobs.length === 0) {
        endCombat();
    }  
}

//updated the character stats to the current values
function charUpdate(){
    document.getElementById("char_level").innerHTML = kar.currentLevel;
    document.getElementById("char_xp").innerHTML = Math.floor(kar.currentXp) + ' / ' + kar.currentLevel*10;
    document.getElementById("char_points").innerHTML = kar.attributePoints;
    document.getElementById("char_hp").innerHTML = Math.ceil(kar.currentHitPoints) + ' / ' + kar.maxHitPoints;
    document.getElementById("char_att").innerHTML = kar.attack; 
    document.getElementById("char_def").innerHTML = kar.defense;
}

function resetMob(){
    document.getElementById("mob-Name").innerHTML = "";
    document.getElementById("mob_level").innerHTML = "";
    document.getElementById("mob_hp").innerHTML = "";
    document.getElementById("mob_att").innerHTML = "";
    document.getElementById("mob_def").innerHTML = "";
}

function atriUpdate () {
    charUpdate();
    if(kar.attributePoints > 0){
        hpUpBtn.style.display = "flex";
        attUpBtn.style.display = "flex";
        defUpBtn.style.display = "flex";
    } else{
        hpUpBtn.style.display = "none";
        attUpBtn.style.display = "none";
        defUpBtn.style.display = "none";
    }
}