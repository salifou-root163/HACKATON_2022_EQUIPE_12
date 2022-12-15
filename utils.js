function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

 //Fonction qui renvoie un booléen selon si la case est un malus
 function isMalus(currentPos){
    return malus.includes(currentPos);
}

//Fonction qui renvoie un booléen selon si la case est un bonus
function isBonus(currentPos){
    return bonus.includes(currentPos);
}

//Fonction qui recharge la batterie 
function recharge(rollResult){
    if(live + rollResult > 7){
        live = 7;
    }else{
        live += rollResult;
    }
}

//Fonction qui décharge la batterie
function decharge(malusBatterie){
    if(live - malusBatterie < 0){
        live = 0;
    }else{
        live -= malusBatterie;
    }
}

