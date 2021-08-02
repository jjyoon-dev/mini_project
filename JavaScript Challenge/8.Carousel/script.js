const images = document.getElementById('images');
const image = document.querySelectorAll('#images img');

let index = 0;

function run() {
	index++;
	
	if(index > images.childElementCount - 1) {
		index = 0;
	}
	
	images.style.transform = `translateX(${-index * 500}px)`;
		
}


setInterval(run, 2000);