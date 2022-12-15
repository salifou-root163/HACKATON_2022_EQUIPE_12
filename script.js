var currentPos = 1;     
        var tour = 0;
        var live = 7;
        var hour = 30;

        var monte = [ 50, 3, 23 ];
        var descente = [ 2, 7 ];

        var tunnel = [ 10, 20, 30 ];
        var tunnel_pts= 2;
        var panne = [ 5, 8, 17 ];
        var panne_pts=3;


        // create a function to generate a random number for the dice roll
        function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }
        // create a variable to hold the result of the dice roll
        var rollResult = rollDice();       
        var diceImage = document.getElementById("dice-image");
        // create a function to animate the dice roll
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

        

       // Déclaration des variables

       

        function createBoard() {
            // Récupérer l'élément HTML qui contiendra le plateau de jeu
            var boardElement = document.getElementById('board');        
            // Utiliser des éléments HTML pour créer les cases du plateau
            // et les disposer dans le bon ordre pour représenter le jeu de l'oie
            for (var i = 60; i >= 1; i--) {
            var squareElement = document.createElement('div');
            squareElement.classList.add('square');
            squareElement.textContent = i;
            squareElement.id=i;      
            boardElement.appendChild(squareElement);
            }
        
            // Utiliser du CSS pour mettre en forme les éléments HTML et créer l'apparence du plateau
            var styleElement = document.createElement('style');
            styleElement.textContent = '.square { display: inline-block; width: 60px; height: 60px; border: 1px solid black; text-align: center; margin:3px; border-radius:2px }';
            document.head.appendChild(styleElement);

            for (i in tunnel){
                document.getElementById(tunnel[i]).style=" border: solid 2px green ";
            }

            for (i in panne){                
                document.getElementById(panne[i]).style=" border: solid 2px red ";
            }

            for (i in monte){                
                document.getElementById(monte[i]).style="  background: url('img/monte.png') top left no-repeat;background-size:15px ";
            }

            for (i in descente){                
                document.getElementById(descente[i]).style="  background: url('img/descente.jpg') top left no-repeat;background-size:20px ";
            }
        }
        
        // Appeler la fonction pour générer le plateau de jeu lorsque la page est chargée

        createBoard();

        function feu(){
            // Créez un canvas en HTML et donnez-lui un identifiant
            

            // Dans votre code JavaScript, récupérez le canvas et le contexte de dessin
            var canvas = document.getElementById("test");
            var ctx = canvas.getContext("2d");

            // Définissez les couleurs que vous souhaitez utiliser pour les feux d'artifice
            var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];

            // Définissez la fonction qui va dessiner les feux d'artifice
            function drawFirework() {
            // Choisissez une position aléatoire sur le canvas pour lancer le feu d'artifice
            var x = Math.random() * canvas.width;
            var y = Math.random() * canvas.height;

            // Choisissez une couleur aléatoire pour le feu d'artifice
            var color = colors[Math.floor(Math.random() * colors.length)];

            // Dessinez un cercle à la position choisie avec la couleur choisie
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            }

            // Utilisez une boucle pour dessiner les feux d'artifice à intervalles réguliers
            setInterval(drawFirework, 100);


        }

        function updateTable(rollResult){
            //feu();
            var lastPos = currentPos

            var newPos=rollResult + currentPos

            var deplacement = rollResult 

            if ( tunnel.includes(newPos) ){
                console.log("Bonus");
                currentPos = lastPos + tunnel_pts + rollResult ;
            }else if ( panne.includes(newPos) ){

                console.log("ancienne pos " + lastPos);
                console.log("Pane " + rollResult);

                currentPos = newPos - panne_pts ;

                console.log("acuel pos " + currentPos);
            }else{
                currentPos = newPos;
            }

            //currentPos = currentPos > 60 ? 60 : currentPos;

            //currentPos = currentPos < 1 ? 1 : currentPos;

            document.getElementById(lastPos).style="background:none";

            document.getElementById(currentPos).style="   background: url('img/car.png') bottom  no-repeat;background-size:60px ;  ";

            
        }
