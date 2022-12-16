var currentPos = 1;
var tour = 0;
var live = 7;
var hour = new Date("2022-12-16T00:00:00.817Z");
var signal = 0;

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
        date = new Date("2022-12-16T00:00:00.817Z");
        signal = await safeRecharge(hour);
        updateTable(rollResult);

    }
    init();
}

// simulation
function simulation() {
    let data = [];
    data[0] = ["tour", "nbRecharge", "signal", "level", "hour"];
    
    for (let i = 1; i <= 20; i++) {
        let nbRecharge = 0;

        do {

            res = rollDice();
            if (canMove()) {
                updateTable(res);
            }
            else {
                recharge(res);
                nbRecharge++;
            }

            console.log("--------------------------------------------------------------------------------");
            console.log(currentPos);

        }
        while (currentPos < 60)
        currentPos=1;
        data[i] = [tour, nbRecharge, signal, level, hour];

    }
    console.log(data);

    // Étape 3 : convertissez votre tableau en une chaîne de caractères au format CSV

    var csv = Papa.unparse(data);

    // Étape 4 : téléchargez le fichier CSV

    var a = document.createElement("a");

    a.href = "data:text/csv;charset=utf-8," + encodeURI(csv);

    a.download = "donnees.csv";

    a.click();
    return data;
}

var rollSimulate = document.getElementById("simulation");
rollSimulate.addEventListener("click", simulation);



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
        updateBattery(live);
        tourPasse();
        signal = await safeRecharge(hour);
        document.getElementById('signal').innerHTML="Signal voiture électrique : "+displayInfoSignal();
        document.getElementById('heure').innerHTML="Heure : "+displayInfoHeure();
        document.getElementById('tour').innerHTML=displayInfoTour();

    }
    init();
}

var rollButton2 = document.getElementById("recharge");
rollButton2.addEventListener("click", animateRoll2);



// Appeler la fonction pour générer le plateau de jeu lorsque la page est chargée

getDifficulte(level);
getMonteDescente();

createBoard();
updateBattery(live);



async function updateTable(rollResult){

    var lastPos = currentPos

    var newPos=rollResult + currentPos

    var deplacement = rollResult
    move(lastPos);
    tourPasse();
    updateBattery(live);
    document.getElementById('signal').innerHTML="Signal voiture électrique : "+displayInfoSignal();
    document.getElementById('heure').innerHTML="Heure : "+displayInfoHeure();
    document.getElementById('tour').innerHTML=displayInfoTour();

    if(currentPos == 60){
        fireworks();
    }else{

        //currentPos = currentPos > 60 ? 60 : currentPos;

        //currentPos = currentPos < 1 ? 1 : currentPos;

        //document.getElementById(lastPos).children[2].classList.remove('active');
        //document.getElementById(currentPos).children[2].classList.add('active');

        document.getElementById(lastPos).children[2].classList.remove('active');

        for (let i=lastPos; i<currentPos; i++){

            var imageElement = document.getElementById(i).children[2];

            //document.getElementById(i).children[2].classList.add('active');

            imageElement.style.display="block";

            await new Promise(resolve => {
                setTimeout(function() {
                    // Code à exécuter avant de résoudre la promesse
                    imageElement.style.display="none";
                    resolve();
                }, 500);
            });
        }

        document.getElementById(currentPos).children[2].classList.add('active');


        console.log("signal : "+signal+" Heure : "+hour );



        //document.getElementById(currentPos).style="   background: url('img/car.png') bottom  no-repeat;background-size:60px ;  ";

    }


}




function easy(){
    level='easy';
    var el = document.getElementById('easy');
    el.classList.add('selected-level');
    var a =document.getElementById('inter');
    var b =document.getElementById('hard');
    a.classList.remove('selected-level');
    b.classList.remove('selected-level');
}

function inter(){
    level='inter';
    var el = document.getElementById('inter');
    el.classList.add('selected-level');
    var a =document.getElementById('easy');
    var b =document.getElementById('hard');
    a.classList.remove('selected-level');
    b.classList.remove('selected-level');
}

function hard(){
    level='hard';
    var el = document.getElementById('hard');
    el.classList.add('selected-level');
    var a =document.getElementById('inter');
    var b =document.getElementById('easy');
    a.classList.remove('selected-level');
    a.classList.remove('selected-level');
}

        function hard(){
            level='hard';
            var el = document.getElementById('hard');            
            el.classList.add('selected-level');
            var a =document.getElementById('inter'); 
            var b =document.getElementById('easy'); 
            a.classList.remove('selected-level');
            a.classList.remove('selected-level');
        }

        function start(){
            console.log(level);

            document.getElementById('btns').style.display="block";
            document.getElementById('game').style.display="block";
            document.getElementById('choice').style.display="none";
            document.getElementById('info').style.display="block"
            document.getElementById('batt').style.display="block";
        }

        var boutonEasy = document.getElementById("easy");
        boutonEasy.addEventListener("click", easy);

        var boutonInter = document.getElementById("inter");
        boutonInter.addEventListener("click", inter);

        var boutonHard = document.getElementById("hard");
        boutonHard.addEventListener("click", hard);

        var boutonStart = document.getElementById("start");
        boutonStart.addEventListener("click", start);
