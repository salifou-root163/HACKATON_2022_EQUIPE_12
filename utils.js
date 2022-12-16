function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

//Fonction qui renvoie un booléen selon si le signal est favorable
function estFavorable(){
    return signal == 1;
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
    const malus = Math.floor(rollResult/2);
    if(estFavorable()){
        if(live + rollResult > 6){
            live = 6;
        }else{
            live += rollResult;
        }
    }else{
        if(live + malus > 6){
            live = 6;
        }else{
            live += malus;
        }
    }
    
}

//Fonction qui incrémente le tour et l'heure
function tourPasse(rollDice){
    tour += 1;
    if(hour.getHours() + rollDice < 24){
        hour.setHours(hour.getHours()+rollDice);
    }else{
        hour.setHours((hour.getHours()+rollDice)-24);
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
            decharge(4);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
                if (currentPos < 0){
                    currentPos = 0;
                }
            }else{
                currentPos = lastPos + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }

        }else if (isDescente(currentPos)){
            decharge(1);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
                if (currentPos < 0){
                    currentPos = 0;
                }
            }else{
                currentPos = lastPos + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }    
        }else{
            decharge(2);
            if(isBonus(currentPos)){
                currentPos = lastPos + bonus_pts + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }else if(isMalus(currentPos)){
                currentPos = lastPos - malus_pts + rollResult;
                if (currentPos < 0){
                    currentPos = 0;
                }
            }else{
                currentPos = lastPos + rollResult;
                if(currentPos > 60){
                    currentPos = 60;
                }
            }
        }
    }else{
        window.alert("Pas assez de batterie (Alerte temporaire en attendant de faire marcher une vraie pop up)");
    }
}

function updateBattery(live){
    console.log("ping"+live);
    document.getElementById("bater").value = live * 10 + "%";  
    bat = document.getElementById("bat");
    bat.value = live * 10;
}

//Fonction de démarage de la partie grâce aux boutons
function debutPartie(difficulte){
    level = difficulte;
    getDifficulte(level);
    getMonteDescente();
    createBoard();
}