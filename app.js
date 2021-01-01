const cardArray = [
    {
        name: "plant1",
        img: "imgs/17-171381_echeveria-tippy-succulents-succulent-png.png"
    },
    {
        name: "plant1",
        img: "imgs/17-171381_echeveria-tippy-succulents-succulent-png.png"
    },
    {
        name: "plant3",
        img: "imgs/58-584054_transparent-succulents-png-succulent-plant-png-download.png"
    },
    {
        name: "plant2",
        img: "imgs/29-294587_echeveria-dusty-rose-transparent-background-transparent-succulent-png.png"
    },
    {
        name: "plant2",
        img: "imgs/29-294587_echeveria-dusty-rose-transparent-background-transparent-succulent-png.png"
    },
    {
        name: "plant3",
        img: "imgs/58-584054_transparent-succulents-png-succulent-plant-png-download.png"
    } 
];
const board = document.querySelector('.board');
let cardsSelected = [];
let cardsSelectedId = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', 'imgs/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}


createBoard();