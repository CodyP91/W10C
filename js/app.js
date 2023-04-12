// This code selects various HTML elements using their IDs and assigns them to variables.
let clickMeButton = document.getElementById('click-me');
let doubleClickMeButton = document.getElementById('double-click-me');
let hoverMeDiv = document.getElementById('hover-me');
let pressSpaceButton = document.getElementById('press-space');

// This code adds an event listener to the clickMeButton variable. When the button is clicked, it changes the button's text to "Clicked!".
clickMeButton.addEventListener('click', function () {
clickMeButton.innerText = 'Clicked!';
});

// This code adds an event listener to the doubleClickMeButton variable. When the button is double clicked, it changes the button's text to "Double Clicked!".
doubleClickMeButton.addEventListener('dblclick', function () {
doubleClickMeButton.innerText = 'Double Clicked!';
});

// This code adds an event listener to the hoverMeDiv variable. When the mouse pointer is over the div, it changes the div's text to "Hovering!".
hoverMeDiv.addEventListener('mouseover', function () {
hoverMeDiv.innerText = 'Hovering!';
});

// This code adds an event listener to the hoverMeDiv variable. When the mouse pointer leaves the div, it changes the div's text back to "Hover Over Me".
hoverMeDiv.addEventListener('mouseout', function () {
hoverMeDiv.innerText = 'Hover Over Me';
});

// This code adds an event listener to the pressSpaceButton variable. When the space bar is pressed, it changes the button's text to "Space Pressed!".
pressSpaceButton.addEventListener('keydown', function (event) {
if (event.code === 'Space') {
pressSpaceButton.innerText = 'Space Pressed!';
}
});