const ctaBtn = document.querySelector('.cta');
const modal = document.getElementById("loveModal");
const modalBody = document.getElementById("modalBody");
const closeLetterBtn = document.getElementById("closeLetterBtn");

// Category 1: The Games
const games = [
    { name: 'Maya Edition 2048', url: 'https://all2048.com/game/69e91d669f2c8' },
    { name: 'Battleships', url: 'https://papergames.io/en/battleship' },
    { name: 'Wordsearch', url: 'https://thewordsearch.com/' }
];

// Category 2: Your 10 Love Letters
const letters = [
    "I am so grateful for you and everything you do for me although sometimes i never show it in my actions, i do genuinely appreciate you xxxx",
    "I love you so much my princess i hope you are doing well, and you are okay if you want to talk remember iam here for you, we work as a team we support each other i would love to here whats bothering you xxxx",
    "I love you big eyes and how they look so cute and deep, they are so beautiful always especially in the sun when i can see all the colours in your eyes xxxxx",
    "Tonight we do a Movie nighttttt yayayayaya grabs snacks xxxxx",
    "I miss you so much, i get so excited to see my gorgeous because you make me so happy and giddy PS ( I jump around in my room from excitement)",
    "I love growing together with you as two people you make me so excited for my future with you and you give me all the motivation i need xxx",
    "I promise i am working day in and day out to be the best for you no matter what and i understand words dont mean much, but actions do and i like doing actions",
    "You are the most stunning beautiful girl in the world sometimes i just sit and stare and i promise iam not being weird i jus think your so gorgeous all the time. Xxx",
    "Iam sorry if sometimes i seem like i dont care, i want to make sure you never feel like that and if you do please tell me xx",
    "You are the most funny and hilarious person your energy alone makes the room more fun and your so spontaneous i never know what your next phrase or dance move is going to be, I love you so much xxxx"
];

ctaBtn.addEventListener('click', () => {
    ctaBtn.innerText = "Choosing...";
    
    setTimeout(() => {
        ctaBtn.innerText = "Click for some magic";
        
        // 50/50 Chance Logic
        const pickGame = Math.random() < 0.5;

        if (pickGame) {
            // Pick a random game
            const game = games[Math.floor(Math.random() * games.length)];
            let alertMsg = `You won a round of ${game.name}! Want to play?`;
            if(game.name === 'Maya Edition 2048') alertMsg = "🌟 LEGENDARY UNLOCK: The Maya 2048 Game!";
            
            if(confirm(alertMsg)) {
                window.open(game.url, '_blank');
            }
        } else {
            // Pick a random letter
            const message = letters[Math.floor(Math.random() * letters.length)];
            modalBody.innerText = message;
            modal.style.display = "block";
            
            setTimeout(() => {
                modal.classList.add('open');
            }, 50);
            
            if (typeof triggerHearts === "function") triggerHearts();
        }
    }, 1000);
});

// Close Button Logic
closeLetterBtn.onclick = () => {
    modal.classList.remove('open');
    setTimeout(() => {
        modal.style.display = "none";
    }, 600);
};

// Hearts Animation
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
}

function triggerHearts() {
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createHeart(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        }, i * 100);
    }
}