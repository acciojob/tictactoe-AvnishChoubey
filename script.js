//your JS code here. If required.
const mainContainer = document.getElementByClass('container');
const startBtn = document.getElementById('submit');
startBtn.addEventListener('click', function(event) {
	event.preventDefault();

	const player1 = document.getElementById('player-1').value;
	const player2 = document.getElementById('player-2').value;

	mainContainer.innerHTML = "<p>'${player1},you're up</p>
		";
});