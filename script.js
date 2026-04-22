const ctaBtn = document.querySelector('.cta');
const modal = document.getElementById("loveModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close-btn");

const options = [
    { type: 'game', name: 'Wordsearch', url: 'https://thewordsearch.com/' },
    { type: 'game', name: 'Battleships', url: 'https://en.gamesplus.com/battleship/' },
    { type: 'message', text: "You're the absolute highlight of my day, every single day. ❤️" },
    { type: 'message', text: "I built this whole site just to show you how much I care. You're amazing! ✨" },
    { type: 'message', text: "Just a reminder: I love you more than all the lines of code in the world. 🚀" }
];

ctaBtn.addEventListener('click', () => {
    ctaBtn.innerText = "Choosing...";
    
    setTimeout(() => {
        const choice = options[Math.floor(Math.random() * options.length)];
        ctaBtn.innerText = "Click for some magic";

        if (choice.type === 'game') {
            if(confirm(`You won a round of ${choice.name}! Want to play?`)) {
                window.open(choice.url, '_blank');
            }
        } else {
            // 1. Put the message in the letter
            modalBody.innerText = choice.text;
            // 2. Show the modal background
            modal.style.display = "block";
            // 3. Trigger the CSS animation
            setTimeout(() => {
                modal.classList.add('open');
            }, 50);
        }
    }, 1000);
});

// Close functionality
closeBtn.onclick = () => {
    modal.classList.remove('open');
    setTimeout(() => { modal.style.display = "none"; }, 500);
};