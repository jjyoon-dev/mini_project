document.addEventListener("DOMContentLoaded", function() {
	let menuToggle = document.body.querySelector(".menu-toggle");
	let nav = document.body.querySelector(".nav");
	
	menuToggle.addEventListener("click", function() {
		menuToggle.classList.toggle("active");	
		nav.classList.toggle("active");
		});
	});	
