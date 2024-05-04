//DOM
const swiper = document.querySelector('#swiper');

//constants
const urls = [
    'https://source.unsplash.com/random/1000x1000?mon',
    'https://source.unsplash.com/random/1000x1000?night',
    'https://source.unsplash.com/random/1000x1000?city',
    'https://source.unsplash.com/random/1000x1000?mountain',
    'https://source.unsplash.com/random/1000x1000?tree',
    'https://source.unsplash.com/random/1000x1000?sky',
]

//variableshttps://source.unsplash.com/random/1000x1000?mon
let cardCount = 0;
https://source.unsplash.com/random/1000x1000?mon
//functions
function appendNewCard() {
    const card = new Card({
        imageUrl: urls[cardCount % 5],
        ondismiss: appendNewCard
    });

    swiper.append(card.element);
    cardCount++;

    const cards = swiper.querySelectorAll('.card:not(.dismissing)');
    cards.forEach((card, index) => {
        card.style.setProperty('--i', index);
    });

}

//firt five cards
for(let i=0; i<5; i++) {
    appendNewCard();
}