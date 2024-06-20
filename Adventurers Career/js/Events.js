//Creates an event
function createEvent(id, mobs, text, weight) {
    this.eventId = id,
    this.eventMobs = mobs,
    this.eventText = text,
    this.eventWeight = weight
}

//Choses which event to run input is a list of all possible events, output is chosen event 
function choseEvent(){
    let weightedList = [];
    for (let i =0; i < eventlog.length; i++){
        let amount = eventlog[i].eventWeight;
        for (let j = 0; j < amount; j++){
            weightedList.push(eventlog[i])
        }
    }
    return (weightedList[Math.floor(Math.random() * weightedList.length)])
}

//creates the eventlog
function createEventLog (){
    eventlog = [];
    eventamount = 3;
    for (let i = 0; i < eventamount; i++){
        let curevent;
        let monsteramount = Math.round(Math.random())+1;
        let monster = [];
        document.getElementById("monster1").style.display = "initial";
        for (let j = 0; j < monsteramount; j++){
            moblevel = Math.round(Math.random()*kar.currentLevel);
            if (moblevel < 1){
                moblevel = 1;
            }
            monster.push(new createMonster("Goblin " + (j+1), moblevel));
        }
        curevent = new createEvent(i, monster , `You encounter ${monsteramount} goblins`, 1);
        eventlog.push(curevent);
    }
}