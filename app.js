document.addEventListener('DOMContentLoaded', () => {
  
  const cardArray = [
    {
      name: 'plant1',
      img: 'imgs/17-171381_echeveria-tippy-succulents-succulent-png.png'
    },
    {
      name: 'plant3',
      img: 'imgs/58-584054_transparent-succulents-png-succulent-plant-png-download.png'
    },
    {
      name: 'plant2',
      img: 'imgs/29-294587_echeveria-dusty-rose-transparent-background-transparent-succulent-png.png'
    },
    {
      name: 'plant3',
      img: 'imgs/58-584054_transparent-succulents-png-succulent-plant-png-download.png'
    },
    {
      name: 'plant1',
      img: 'imgs/17-171381_echeveria-tippy-succulents-succulent-png.png'
    },
    {
      name: 'plant2',
      img: 'imgs/29-294587_echeveria-dusty-rose-transparent-background-transparent-succulent-png.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'imgs/blank.jpg');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'imgs/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'imgs/blank.jpg');
      alert('You need to click on another image.');
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match!');
      cards[optionOneId].setAttribute('src', 'imgs/white.jpg');
      cards[optionTwoId].setAttribute('src', 'imgs/white.jpg');
      cards[optionOneId].removeEventListener('click', flipCard);
      cards[optionTwoId].removeEventListener('click', flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'imgs/blank.jpg');
      cards[optionTwoId].setAttribute('src', 'imgs/blank.jpg');
      alert('Whoops, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if  (cardsWon.length === cardArray.length/2) {
      alert("Congrats, you found all the pairs!");
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  createBoard()
})