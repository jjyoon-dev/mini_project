const sounds = [
	'applause',
	'boo',
	'gasp',
	'tada',
	'victory',
	'wrong'
];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add("btn");
	btn.innerText = sound;
	
	document.body.appendChild(btn);
	
	btn.addEventListener('click', function() {
		stopSounds();
		
		document.getElementById(sound).volume = 0.2;
		document.getElementById(sound).play();
	})	
});

function stopSounds() {
	sounds.forEach((sound) => {
		const song = document.getElementById('sound');
		song.pause();
		song.currentTime = 0;
	})
}

