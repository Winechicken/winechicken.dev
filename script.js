// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    modeToggle.textContent = document.body.dataset.theme === 'dark' ? 'night-mode-svgrepo-com.svg' : 'night-mode-svgrepo-com.svg';
});

// Function to open CV in a new tab
function openCV() {
    window.open('cv.docx', '_blank');
}

// Initial setup
document.body.dataset.theme = 'light';