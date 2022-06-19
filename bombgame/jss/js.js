const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");
const typingT = document.getElementById("typing");
const startBtn = document.getElementById("start");
const bombImg = document.getElementById("bomb");
const container = document.getElementById("main-container");

const pharagraphs = [
    'The war between USA and Japan has begun' , 
    'Usa has the upper hand with his multiple',
    'Nukes and military forces.',
    'Will the japanese people be able to',
    'win this war even though they seem to be',
    'weaker? or will they be vanished along',
    'with the USA nukes?',
    'Will the japaneses become victorious',
    'using mechas and other otakus stuff?',
    'The OTAN is maintaining a neutral position',
    'Regarding this issue.'

 ];

 let bombXposition = 240;
 let bombYposition = -100;
 let bombDroppingFrecuency = 500;
 
 function bombO(){
     ctx.drawImage(bomb, bombXposition, bombYposition, 100,100);
     bomb.onload = () => {
        clear();
        bomb.style.display = "none";
      }
      
      function drawImage(){
        ctx.drawImage(bomb, 0, 0);
      }
      
    function clearCanvas(){
        console.log("Clear")
        ctx.clearRect(0, 0, 600, 350);
        drawImage();
      }
}

 ctx.save();
 function bombDroppingMovement() {
     let bombTime = setInterval(frame, bombDroppingFrecuency);
     function frame() {
         bombO();
         if (bombYposition >= 250) {
             clearInterval(bombTime);
            alert("You've lost");
         } 
         else {
             bombYposition = bombYposition+ 10;
         }
     }
 }
 const start = () =>{

    bombDroppingMovement(); 
    typingProcess();
    function typingProcess (){
        typingT.innerText = "";
        startBtn.classList.add("hidden");

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
            currentLetter.classList.add("done");
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