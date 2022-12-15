function createBoard() {
            
    var boardElement = document.getElementById('board');              
    for (var i = 60; i >= 1; i--) {
    var squareElement = document.createElement('div');
    squareElement.classList.add('square');
    squareElement.textContent = "";
    squareElement.id=i;      
    boardElement.appendChild(squareElement);
    }

    // Utiliser du CSS pour mettre en forme les éléments HTML et créer l'apparence du plateau
    var styleElement = document.createElement('style');
    styleElement.textContent = '.square { display: inline-block; width: 60px; height: 60px; border: 1px solid black; text-align: center; margin:3px; border-radius:2px }';
    document.head.appendChild(styleElement);

    for (i in bonus){
        document.getElementById(bonus[i]).style=" background: url('img/bonus.png') top left no-repeat;background-size:15px;  ";
    }

    for (i in malus){                
        document.getElementById(malus[i]).style=" background: url('img/malus.png') top left no-repeat;background-size:15px ";
    }

    for (i in monte){                
        document.getElementById(monte[i]).style="  background: url('img/monte.png') top right no-repeat;background-size:15px ";
    }

    for (i in descente){                
        document.getElementById(descente[i]).style="  background: url('img/descente.jpg') top right no-repeat;background-size:15px ";
    }
}