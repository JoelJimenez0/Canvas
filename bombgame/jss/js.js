const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
const typingT = document.getElementById("typing");
const startBtn = document.getElementById("start");
const container = document.getElementById("main-container");

const pharagraphs = [
    'The war between USA and Japan has begun' , 
    'Usa has the upper hand with his multiple',
    'Nukes and military forces.',
    'Will the japanese people be able to',
    'win this war, even though they seem to be',
    'weaker? or will they be vanished along',
    'with the USA nukes?',
    'Will the japaneses become victorious',
    'using mechas and other otakus stuff?',
    'The OTAN is maintaining a neutral position',
    'Regarding this issue.'

 ];

 bomb = new Image();
 bomb.src = 'img/bomb.png';

 function drawAll(){
    ctx.drawImage(bomb, bombYposition, bombXposition, 100, 100);
 }

 let bombXposition = 240;
 let bombYposition = -100;
 let bombDroppingFrecuency = 500;
 
 function bombO(){
    console.log;
     ctx.drawImage(bomb, bombXposition, bombYposition, 100,100);
}

 ctx.save();
 function bombDroppingMovement() {
     let bombTime = setInterval(frame, bombDroppingFrecuency);
     function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
         bombO();
         if (bombYposition >= 250) {
            clearInterval(bombTime);
            alert("You've lost");
         } 
         else {
             bombYposition = bombYposition+ 7;
         }
     }
 }
 const start = () =>{   

    bombDroppingMovement(); 
    typingProcess();
    function typingProcess (){
        typingT.innerText = "";
        startBtn.style.display = "none";

    const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

    const characters = text.split('').map(char =>{
        const span = document.createElement('span');
        span.innerText =char;
        typingT.appendChild(span);
        return span;
    })

    let cursorIndex = 0;
    let currentLetter = characters[cursorIndex];
    currentLetter.classList.add("current-letter");

    const keydown = ({ key })=>{
        if (key === currentLetter.innerText){
            currentLetter.classList.remove("current-letter");
            currentLetter.style.color = "blue";
            currentLetter = characters[++cursorIndex];
            bombYposition = bombYposition -3;
        }

        if(cursorIndex >= characters.length){
            document.removeEventListener("keydown", keydown);
        return typingProcess();
        }
        currentLetter.classList.add("current-letter");
    }
    document.addEventListener("keydown", keydown);
    };
};