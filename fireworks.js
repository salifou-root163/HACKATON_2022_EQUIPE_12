function fireworks(){            
    var canvas = document.getElementById("test");
    var ctx = canvas.getContext("2d");            
    var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF"];            
    function drawFirework() {            
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var color = colors[Math.floor(Math.random() * colors.length)];        
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    }            
    setInterval(drawFirework, 100);

}