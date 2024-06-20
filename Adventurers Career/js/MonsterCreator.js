
//Creates a constructor function that build a monster
function createMonster(name, level) {
    this.mobName = name
    this.currentLevel = level,
    this.statDistribution = level*5,
    this.hpRoll = Math.floor(Math.random() * 100),
    this.attackRoll = Math.floor(Math.random() * (100 - this.hpRoll)),
    this.defenseRoll = 100 - this.attackRoll - this.hpRoll,
    this.currentHitPoints = Math.round(this.hpRoll/100*this.statDistribution*5)+5,
    this.attack = Math.round(this.attackRoll/100*this.statDistribution)+1,
    this.defense = Math.round(this.defenseRoll/100*this.statDistribution)+1,
    this.damageMob = function (damage){
        this.currentHitPoints -= (damage/this.defense);
    }
}