function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}