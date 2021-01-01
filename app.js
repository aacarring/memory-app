const images = document.querySelectorAll('.board .card img');

function flipCard() {
  this.setAttribute('src', 'imgs/blank.jpg');
}

images.forEach(img => img.addEventListener('click', flipCard));