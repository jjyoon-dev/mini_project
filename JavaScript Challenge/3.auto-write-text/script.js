const text = 'This is JavaScript Challenge!!💥';

let index = 0;

function writeText() {
	document.body.innerText = text.slice(0, index);

	index++;

	if (index == text.length - 1) {
		setTimeout(function() {
			index = 0;
		}, 2000);
	}
	
//	if (index > text.length - 1) {
//		index = 0;
//	}
}


setInterval(writeText, 100);
