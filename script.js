        var currentPos = 1;     
        var tour = 0;
        var live = 7;
        var hour = 30;

        var level="";

        var monte = [];
        var descente = [ ];

        var bonus = [ ];
        var bonus_pts= 2;
        var malus = [ ];
        var malus_pts=3;

        var rollResult = rollDice();       
        var diceImage = document.getElementById("dice-image");
        
        function animateRoll() {  
            function attendreSetTimeout() {
                return new Promise((resolve) => {                
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                    rollResult = rollDice();            
                    diceImage.src = "img/dice-" + rollResult + ".png";
                    // Appeler resolve() une seule fois, à la fin de la boucle
                    if (i === 19) resolve(rollResult);
                  }, i * 100); 
                }                
                });
            }            
            async function init() {            
                rollResult = await attendreSetTimeout();  
                updateTable(rollResult);
            }             
            init();            
        }

        

        // create an event listener to start the animation when the roll button is clicked
        var rollButton = document.getElementById("roll-button");
        rollButton.addEventListener("click", animateRoll);

       
        
        // Appeler la fonction pour générer le plateau de jeu lorsque la page est chargée

        getDifficulte(level);
        getMonteDescente();

        createBoard();

        

        function updateTable(rollResult){
            
            var lastPos = currentPos

            var newPos=rollResult + currentPos

            var deplacement = rollResult 
          
            if ( bonus.includes(newPos) ){
                console.log("Bonus");
                currentPos = lastPos + bonus_pts + rollResult ;
            }else if ( malus.includes(newPos) ){

                console.log("ancienne pos " + lastPos);
                console.log("Pane " + rollResult);

                currentPos = newPos - malus_pts ;

                console.log("acuel pos " + currentPos);
            }else{
                currentPos = newPos;
            }
            if(currentPos > 60){
                //Faire la fenêtre de fin de jeu
            }else{

            //currentPos = currentPos > 60 ? 60 : currentPos;

            //currentPos = currentPos < 1 ? 1 : currentPos;

            document.getElementById(lastPos).style="background:none";

            document.getElementById(currentPos).style="   background: url('img/car.png') bottom  no-repeat;background-size:60px ;  ";
            
            }
            
            
        }
