'use strict';

// 1. Define a color for the snow
snowStorm.snowColor = '#fff';
// 2. To optimize, define the max number of flakes that can
// be shown on screen at once
snowStorm.flakesMaxActive = 96;
// 3. Allow the snow to flicker in and out of the view
snowStorm.useTwinkleEffect = true; 
// 4. Start the snowstorm!
snowStorm.start();

// Displays the information about the project when the 'about project' button is clicked
function displayProjectInfo() {
    document.getElementById("project-info").style.display = "block";
}

// light / dark mode 
let lightButton = document.getElementById('light-mode-desktop');
let darkButton = document.getElementById('dark-mode-desktop');

darkButton.addEventListener('click', () => {
    document.body.style.backgroundImage = `url(${'./images/body-dark-mode.svg'})`;
    darkButton.style.display = 'none';
    lightButton.style.display = 'block';
});

lightButton.addEventListener('click', () => {
    document.body.style.backgroundImage = `url(${'./images/confetti-doodles.svg'})`;
    darkButton.style.display = 'block';
    lightButton.style.display = 'none';
});


// Timer to display each image for 2 sec
