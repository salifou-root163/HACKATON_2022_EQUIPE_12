function createBoard() {
            


    // Utiliser du CSS pour mettre en forme les éléments HTML et créer l'apparence du plateau
    var styleElement = document.createElement('style');
    styleElement.textContent = '.square { display: inline-block; width: 60px; height: 60px; border: 1px solid black; text-align: center; margin:3px; border-radius:2px; position: relative;  }';
    document.head.appendChild(styleElement);

    for (i in bonus){

        let monDiv = document.getElementById(bonus[i]);
        let enfants = monDiv.children;        
        enfants[0].src= "img/bonus.png";       
        
    }

    for (i in malus){                
        let monDiv = document.getElementById(malus[i]);
        let enfants = monDiv.children;        
        enfants[0].src= "img/malus.png"; 
    }

    for (i in monte){                
        let monDiv = document.getElementById(monte[i]);
        let enfants = monDiv.children;        
        enfants[1].src= "img/monte.png"; 
    }

    for (i in descente){                
        let monDiv = document.getElementById(descente[i]);
        let enfants = monDiv.children;        
        enfants[1].src= "img/descente.jpg"; 
    }


}