/* script.js */

// Function to handle clicking photos in the gallery
const galleryImages = document.querySelectorAll('.gallery-img-container');
galleryImages.forEach(imgContainer => {
    imgContainer.addEventListener('click', (e) => {
        // Find the click coordinates relative to the page
        const rect = imgContainer.getBoundingClientRect();
        const x = e.clientX;
        const y = e.clientY + window.scrollY; // Adjust for page scrolling

        // Spawn 10 hearts from the click location
        for (let i = 0; i < 10; i++) {
            createHeart(x, y);
        }
    });
});

// Final Message Button Logic
const ctaBtn = document.querySelector('.cta');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        // Custom message
        alert("Here's to many more lines of clean code and happy moments! I love you! ❤️🚀");
        // Trigger a big heart shower from the button
        const rect = ctaBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2 + window.scrollY;

        for (let i = 0; i < 30; i++) {
            createHeart(centerX, centerY);
        }
    });
}

// Function to create a flying heart
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // Or use an emoji character
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    // Add variations in size and flight angle
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // Create a unique transform animation for this heart to make it look organic
    const xMovement = (Math.random() - 0.5) * 150; // Random side-to-side spread
    const yMovement = (Math.random() + 0.5) * -150; // Random upward thrust
    heart.animate([
        { transform: 'translate(-50%, -50%)' },
        { transform: `translate(-50%, calc(-50% - ${Math.abs(yMovement)}px)) translateX(${xMovement}px)` }
    ], {
        duration: 1000 + Math.random() * 500, // randomized duration
        easing: 'ease-out',
        fill: 'forwards'
    });

    // Fade and scale down animation
    heart.animate([
        { opacity: 1, scale: 1 },
        { opacity: 0, scale: 0, offset: 0.8 },
        { opacity: 0, scale: 0 }
    ], {
        duration: 1000 + Math.random() * 500, // randomized duration
        easing: 'ease-out',
        fill: 'forwards'
    });

    document.body.appendChild(heart);

    // Clean up DOM after animation is done
    setTimeout(() => {
        heart.remove();
    }, 1500); // match max duration
}