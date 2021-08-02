const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', function() {
	createNotification();
})

function createNotification() {
	const notif = document.createElement('div');
	notif.classList.add('toast');
	
	notif.innerText = '잠시 후 다시 시도해주세요.';
	
	container.appendChild(notif);
	
	setTimeout(function() {
		notif.remove();
	}, 3000)
}