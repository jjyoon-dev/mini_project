const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	document.body.style.background = randomColor();
	btn.style.background = randomColor();
	btn.style.color = randomColor();
	console.log(randomColor());
});

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
//	or
//	return "#" + (parseInt(Math.random() * 0xffffff).toString(16));
}
