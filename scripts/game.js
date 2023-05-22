let game = {
    score:0,
    buildBoard: [],
}

const cardsArray = [

    {
        cardName: "fries",
        img: "images/fries.png",
    },
    {
        cardName: "cheedeburger",
        img: "images/cheeseburger.png",
    },
    { 
        cardName: "hotdog", 
        img: "images/hotdog.png",
    },
    {
        cardName: "ice-scream",
        img: "images/ice-scream.png",
    },
    {
        cardName: "milkshake",
        img: "images/milkshake.png",
    },
    {
        cardName: "pizza",
        img: "images/pizza.png",
    },
    {
        cardName: "fries",
        img: "images/fries.png",
    },
    {
        cardName: "cheedeburger",
        img: "images/cheeseburger.png",
    },
    { 
        cardName: "hotdog", 
        img: "images/hotdog.png",
    },
    {
        cardName: "ice-scream",
        img: "images/ice-scream.png",
    },
    {
        cardName: "milkshake",
        img: "images/milkshake.png",
    },
    {
        cardName: "pizza",
        img: "images/pizza.png",
    },
];

cardsArray.sort(() => 0.5- Math.random());

const board = document.querySelector("#board");

function buildBoard() {
    for( let i = 0; i < cardsArray.length; i++) {
        const cards = document.createElement('img');
        cards.setAttribute("src", "images/blank.png")
        cards.setAttribute("data-id", i)
        cards.addEventListener("click", turnCard)
        board.append(cards)
        console.log("clicked");
    }
}

buildBoard();

function turnCard () {
    const turnCardId = this.getAttribute("data-id")
    console.log(cardsArray[turnCardId].name);
    console.log("clicked", turnCardId);
}


module.exports = { game, buildBoard }