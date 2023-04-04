let clickMeButton = document.getElementById('click-me');
let doubleClickMeButton = document.getElementById('double-click-me');
let hoverMeDiv = document.getElementById('hover-me');
let pressSpaceButton = document.getElementById('press-space');

clickMeButton.addEventListener('click', function () {
  clickMeButton.innerText = 'Clicked!';
});

doubleClickMeButton.addEventListener('dblclick', function () {
  doubleClickMeButton.innerText = 'Double Clicked!';
});

hoverMeDiv.addEventListener('mouseover', function () {
  hoverMeDiv.innerText = 'Hovering!';
});

hoverMeDiv.addEventListener('mouseout', function () {
  hoverMeDiv.innerText = 'Hover Over Me';
});

pressSpaceButton.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    pressSpaceButton.innerText = 'Space Pressed!';
  }
});
