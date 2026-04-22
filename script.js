const ctaBtn = document.querySelector('.cta');
const modal = document.getElementById("loveModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// The "Roulette" options
const options = [
    { type: 'game', name: 'Wordsearch', url: 'https://thewordsearch.com/' },
    { type: 'game', name: 'Battleships', url: 'https://en.gamesplus.com/battleship/' },
    { type: 'message', text: "You're the absolute highlight of my day, every single day. ❤️" },
    { type: 'message', text: "I'm so proud of everything you do. You're amazing! ✨" },
    { type: 'message', text: "Just a reminder: I love you more than all the lines of code in the world. 🚀" }
];

ctaBtn.addEventListener('click', () => {
    // 1. Visual feedback (changing button text to look like it's thinking)
    ctaBtn.innerText = "Choosing...";
    
    // 2. Short delay to build suspense
    setTimeout(() => {
        const choice = options[Math.floor(Math.random() * options.length)];
        ctaBtn.innerText = "Click for some magic";

        // ... inside your event listener after the "Choosing" timeout ...

    if (choice.type === 'game') {
        if(confirm(`Lucky! You won a round of ${choice.name}!`)) {
            window.open(choice.url, '_blank');
        }
    } else {
        // Show Letter Animation
        modalBody.innerText = choice.text;
        modal.style.display = "block";
        
        // Tiny delay so the animation feels smooth
        setTimeout(() => {
            modal.classList.add('open');
        }, 100);
        
        triggerHearts();
    }
});

// Close modal when X is clicked
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }

function triggerHearts() {
    for (let i = 0; i < 30; i++) {
        createHeart(window.innerWidth/2, window.innerHeight/2);
    }
}

// Keep your existing createHeart function here!
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
}