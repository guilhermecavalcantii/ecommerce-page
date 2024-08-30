const games = [
    {
        title: "Jogo 1",
        description: "Descrição do Jogo 1.",
        price: "R$ 349,99",
        image: "jogo1.jpg"
    },
    {
        title: "Jogo 2",
        description: "Descrição do Jogo 2.",
        price: "R$ 299,99",
        image: "jogo2.jpg"
    },
    {
        title: "Jogo 3",
        description: "Descrição do Jogo 3.",
        price: "R$ 249,99",
        image: "jogo3.jpg"
    },
    {
        title: "Jogo 4",
        description: "Descrição do Jogo 4.",
        price: "R$ 199,99",
        image: "jogo4.jpg"
    },
    {
        title: "Jogo 5",
        description: "Descrição do Jogo 5.",
        price: "R$ 149,99",
        image: "jogo5.jpg"
    }
];

let currentIndex = 0;

function updateCarousel(index) {
    const mainImage = document.getElementById('main-image');
    const gameTitle = document.getElementById('game-title');
    const gameDescription = document.getElementById('game-description');
    const gamePrice = document.getElementById('game-price');

    mainImage.src = games[index].image;
    gameTitle.textContent = games[index].title;
    gameDescription.textContent = games[index].description;
    gamePrice.textContent = games[index].price;
}

function nextGame() {
    currentIndex = (currentIndex + 1) % games.length;
    updateCarousel(currentIndex);
}

setInterval(nextGame, 5000);

document.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(index);
    });
});
