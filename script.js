        var currentPos = 1;     
        var tour = 0;
        var live = 6;
        var hour = new Date("2022-12-16T00:00:00.817Z");

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
                let signal = await safeRecharge(hour);
                console.log(signal);
                updateTable(rollResult);
                
            }             
            init();            
        }

        

        // create an event listener to start the animation when the roll button is clicked
        var rollButton = document.getElementById("roll-button");
        rollButton.addEventListener("click", animateRoll);

        //recharge
        function animateRoll2() {  
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
                let res = await attendreSetTimeout();  
                recharge(res);
                
            }             
            init();            
        }

        var rollButton2 = document.getElementById("recharge");
        rollButton2.addEventListener("click", animateRoll2);


        
        // Appeler la fonction pour générer le plateau de jeu lorsque la page est chargée

        getDifficulte(level);
        getMonteDescente();

       

        createBoard();

        

        function updateTable(rollResult){
            
            var lastPos = currentPos

            var newPos=rollResult + currentPos

            var deplacement = rollResult 
            move(lastPos);
            tourPasse(rollResult);
            
            if(currentPos > 60){
                //Faire la fenêtre de fin de jeu
            }else{

            //currentPos = currentPos > 60 ? 60 : currentPos;

            //currentPos = currentPos < 1 ? 1 : currentPos;

            document.getElementById(lastPos).style="background:none";

            document.getElementById(currentPos).style="   background: url('img/car.png') bottom  no-repeat;background-size:60px ;  ";
            console.log(live);
            console.log("Heure"+hour);
            }
            
            
        }
