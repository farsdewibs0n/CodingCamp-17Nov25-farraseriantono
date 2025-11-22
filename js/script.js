welcomeMessage();

// Function to prompt user for their name and display a welcome message
function welcomeMessage() {
    // Prompt the user to enter their name
    let userName = prompt("Please enter your name:");

    // If the user did not enter a name, default to "Guest"
    if (userName === '' || userName === null) {
        userName = "Guest";
    }

    // Update the welcome message on the webpage
    document.getElementById("welcome-speech").innerText = "Welcome, " + userName + "!";
}

// Image Slideshow on Home Page
/*    TODO: Fix the slider implementation
document.addEventListener('DOMContentLoaded', function () {
    const slidesEl = document.querySelector('.slides');
    if (!slidesEl) return;

    const slides = Array.from(document.querySelectorAll('.slide'));
    let index = 0;
    const total = slides.length;
    let interval = null;

    function goTo(i) {
        index = (i + total) % total;
        slidesEl.style.transform = `translateX(-${index * 100}%)`;
    }

    function next() { goTo(index + 1); }

    interval = setInterval(next, 3000);

    // Pause on hover/focus
    const slider = document.querySelector('.slider');
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => { clearInterval(interval); interval = setInterval(next, 3000); });

    // Basic touch swipe support
    let startX = 0;
    let moved = false;
    slider.addEventListener('touchstart', (e) => {
        clearInterval(interval);
        startX = e.touches[0].clientX;
        moved = false;
    }, { passive: true });

    slider.addEventListener('touchmove', (e) => {
        const dx = e.touches[0].clientX - startX;
        if (Math.abs(dx) > 10) moved = true;
        // optional small drag effect:
        slidesEl.style.transform = `translateX(${ -index * 100 + (dx / slider.clientWidth) * 100 }%)`;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        if (!moved) { interval = setInterval(next, 3000); return; }
        const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
        const dx = endX - startX;
        if (dx < -40) goTo(index + 1);
        else if (dx > 40) goTo(index - 1);
        else goTo(index);
        // restart auto cycle
        clearInterval(interval);
        interval = setInterval(next, 3000);
    });
});
*/

// Function to validate the message form
function validateForm() {

}