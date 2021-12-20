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

// These 2 dosen't work as it supposed, resolve them
function darkMode() {
    let element = document.body;
    element.classList.toggle("darkMode");
}

function lightMode() {
    let element = document.body;
    element.classList.toggle("lightMode");
}

// Displays the information about the project when the 'about project' is clicked
function displayProjectInfo() {
    document.getElementById("project-info").style.display = "block";
}
