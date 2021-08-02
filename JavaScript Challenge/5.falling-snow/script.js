function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

//    heart.innerText = "";
	
	var randomNum = Math.random() * 30 + 10 + 'px';		
	
	heart.style.width = randomNum;
	heart.style.height = randomNum;

	
	heart.style.left = Math.random() * 100 + 'vw';
	
	heart.style.animationDuration = Math.random() * 2 + 5 + "s";

    document.body.appendChild(heart);
	
	setTimeout(function() {
		heart.remove();
	}, 5000)
}

setInterval(createHeart, 300);
