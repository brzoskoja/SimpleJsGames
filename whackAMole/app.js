const timeLeft = document.querySelector("#timeLeft");
const score = document.querySelector("#score");
const allFields = document.querySelectorAll(".field");
const restarButton = document.querySelector("#restart");

let molesHit = 0;
let timeToPlay = 30;
randomMole();
let mainTimer = setInterval(countDown,1000);
let moleTimer = setInterval(randomMole,1000);
function randomMole(){
    clearFields();
    let randomField = Math.floor(Math.random() * (9 - 1)) + 1; 
    allFields[randomField].classList.add("mole");
    allFields[randomField].addEventListener("click",hit);
}

function hit (){
    molesHit++;
    this.classList.remove("mole");
    score.textContent = molesHit;
    clearInterval(moleTimer);
    moleTimer = setInterval(randomMole,1000);
    randomMole();
}
function clearFields(){
    allFields.forEach((element)=>{
        element.classList.remove("mole");
        element.removeEventListener("click",hit);
    });
}

function countDown(){
    timeToPlay--;
    timeLeft.textContent = timeToPlay
    if (timeToPlay===0)
    {
        clearInterval(mainTimer);
        clearInterval(moleTimer);
        clearFields();
        restarButton.hidden = false;     
        alert("Game Over. Your score is " + molesHit);
    }
}