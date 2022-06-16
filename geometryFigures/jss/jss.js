const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

const circle = document.getElementById("circle");
const oval = document.getElementById("oval");
const rectangle = document.getElementById("rectangle");
const square = document.getElementById("square");
const triangle = document.getElementById("triangle");


circle.addEventListener("click", function(){
    ctx.beginPath();
    ctx.arc(80,70,60,0,2*Math.PI);
    ctx.fillStyle =("blue");
    ctx.fill();
});

rectangle.addEventListener("click", function(){
    ctx.fillStyle = "blue";
    //fillRect(x1,y1,x2,y2);
    ctx.fillRect(420,17,180, 80);
});

square.addEventListener("click", function(){
    ctx.fillStyle = "blue";
    ctx.fillRect(660,20,100,100);
});

oval.addEventListener("click", function(){
    ctx.beginPath();
    ctx.moveTo(200, 80); 
    // ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    ctx.bezierCurveTo(200, 0, 250, 0, 250, 80);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle =("blue");
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(200, 80); 
    // ctx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
    ctx.bezierCurveTo(200, 160, 250, 160, 250, 80);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle =("blue");
    ctx.fill();
});

triangle.addEventListener("click", function(){
    ctx.beginPath();
    // moveTo(x1, y1);
    ctx.moveTo(850, 150);
    // lineTo(x2, y2);
    ctx.lineTo(960, 150);
    ctx.lineTo(900, 20);
    ctx.lineTo(852, 150);

    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle =("blue");
    ctx.fill();
});