//Creates a constructor function that builds the charactar
function createCharacter(level = 1, xp = 0, hp = 10, att = 1, def = 1) {
    this.currentLevel = level,
    this.currentXp = xp,
    this.addXp = function (xp){
        this.currentXp += xp;
        if (this.currentXp >= (this.currentLevel*10)){
            this.attributePoints += 5;
            this.currentXp = this.currentXp - (this.currentLevel*10);
            this.currentLevel +=1;
            atriUpdate();
        }
    },
    this.maxHitPoints = hp,
    this.currentHitPoints = hp,
    this.attack = att,
    this.defense = def,
    this.defendpower = 0,
    this.damageChar = function (damage){
        this.currentHitPoints -= (damage/(this.defense+this.defendpower));
    },
    this.healChar = function (heal){
        this.currentHitPoints += heal;
        if (this.currentHitPoints > this.maxHitPoints){
            this.currentHitPoints = this.maxHitPoints;
        }
    },
    this.attributePoints = 5;
}