document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    if (!container) {
        console.error('Container element not found!');
        return;
    }

    // Generate 800 boxes
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.setProperty('--hue', Math.floor(Math.random() * 360));
        container.appendChild(square);
    }

    // Add hover event listeners
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseover', () => {
            const hue = square.style.getPropertyValue('--hue');
            // Set the square's background color directly (this will persist)
            square.style.backgroundColor = `hsl(${hue}, 70%, 50%)`;
			setTimeout(() => {
        square.style.backgroundColor = '#444'; // Revert to default color
    }, 1000);
        });
    });
});