document.addEventListener("DOMContentLoaded", ()=>{
let cards = [ 
    {
        name : "birb",
        source: "images/birb.jpg"
    },
    {
        name : "cat",
        source: "images/cat.jpg"
    },
    {
        name : "elephant",
        source: "images/elephant.jpg"
    },
    {
        name : "fox",
        source: "images/fox.jpg"
    },
    {
        name : "birb",
        source: "images/birb.jpg"
    },
    {
        name : "cat",
        source: "images/cat.jpg"
    },
    {
        name : "elephant",
        source: "images/elephant.jpg"
    },
    {
        name : "fox",
        source: "images/fox.jpg"
    },
    {
        name : "giraff",
        source: "images/giraff.jpg"
    },
    {
        name : "giraff",
        source: "images/giraff.jpg"
    },
    {
        name : "hamster",
        source: "images/hamster.jpg"
    },
    {
        name : "hamster",
        source: "images/hamster.jpg"
    },

    ]
    cards.sort(()=> 0.5- Math.random());

    const grid = document.querySelector(".grid");
    let flippedCards = [];
    let score = 0;
    function createBoard(){
        for (let i = 0; i<cards.length; i++){
            let card = document.createElement("img");
            card.setAttribute("src", "images/back.jpg" );
            card.setAttribute("id",i);
            card.setAttribute("name",cards[i].name);
            card.addEventListener("click",flip);
            grid.appendChild(card);
        }
    }

    function flip(){
        this.setAttribute("src", `images/${cards[this.id].name}.jpg`);
        flippedCards.push(this.id);
        if(flippedCards.length === 2)
        {
            setTimeout(checkForMatch,500);
        }
    }

    function checkForMatch(){
        let allCards = document.querySelectorAll("img");
        if(allCards[flippedCards[0]].name === allCards[flippedCards[1]].name)
            {
                
                score++;
                document.querySelector("#result").textContent = score;
                allCards[flippedCards[0]].setAttribute("src","images/empty.jpg");
                allCards[flippedCards[1]].setAttribute("src","images/empty.jpg");
                alert("It's a match!");

            }
            else{
                allCards[flippedCards[0]].setAttribute("src","images/back.jpg");
                allCards[flippedCards[1]].setAttribute("src","images/back.jpg");
                alert("Soooryy!");
            }
            flippedCards = [];
            if(score === allCards.length/2)
            {
            alert("You won!");

            }
    }
    createBoard();
});