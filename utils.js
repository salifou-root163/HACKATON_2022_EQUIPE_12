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

//Fonction qui renvoie un booléen selon si la case est une montée
function isMonte(currentPos){
    return monte.includes(currentPos);
}
//Fonction qui renvoie un booléen selon si la case est une descente
function isDescente(currentPos){
    return descente.includes(currentPos);
}

//Fonction qui recharge la batterie 
function recharge(rollResult){
    if(live + rollResult > 7){
        live = 7;
    }else{
        live += rollResult;
    }
}

//Fonction qui incrémente le tour et l'heure
function tourPasse(rollDice){
    tour += 1;
    if(hour + rollDice < 24){
        hour += rollDice;
    }else{
        hour = hour + rollDice - 24;
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

//Fonction qui va vérifier si la voiture peux bouger seon sa batterie

function canMove(){
    if (isMonte(currentPos)){
        return live >= 3;
    }
    else if (isDescente(currentPos)){
        return live >= 1;
    }else{
        return live >= 2;
    }
    
}


//Fonction qui va faire évoluer la batterie de l'utilisateur selon l'usage
function move(lastPos){
    console.log(canMove())
    if(canMove()){

        if(isMonte(currentPos)){
            decharge(3);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
            }else{
                currentPos = lastPos + rollResult;
            }

        }else if (isDescente(currentPos)){
            decharge(1);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
            }else{
                currentPos = lastPos + rollResult;
            }    
        }else{
            decharge(2);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
            }else{
                currentPos = lastPos + rollResult;
            }
        }
    }else{

    }
}

function updateBattery(live){
    console.log("ping"+live);
    document.getElementById("bater").value = live * 10 + "%";  
    bat = document.getElementById("bat");
    bat.value = live * 10;
}