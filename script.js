//your JS code here. If required.
const container = document.querySelector('.container');

// Generate 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    // Assign a random hue value (0-360) for HSL color
    square.style.setProperty('--hue', Math.floor(Math.random() * 360));
    container.appendChild(square);
}

// Add hover event listeners to change body background
document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseover', () => {
        // Get the square's hue and apply it to the body background
        const hue = square.style.getPropertyValue('--hue');
        // document.body.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
        
        // Revert background after 1 second
        setTimeout(() => {
            document.body.style.backgroundColor = '#333';
        }, 1000);
    });
});