var panels = [].slice.call(document.querySelectorAll(".panel"));

// for(var i = 0; i < panels.length; i++) {
	// panels[i].addEventListener("mouseenter", function() {
		// this.classList.add("active");
	// }, false);
	
	// panels[i].addEventListener("mouseleave", function() {
		// this.classList.remove("active");
	// }, false);
// }


function clickActive() {
	if(!this.classList.contains("active")) {
		for (var i = 0; i < panels.length; i++) {
			panels[i].classList.remove("active");
	}
	}
	this.classList.toggle("active");
}

function clickOpen() {
	
	this.classList.toggle("open");
}

for(var i = 0; i < panels.length; i++) {
	panels[i].addEventListener("click", clickActive, false);
	panels[i].addEventListener("transitionend", clickOpen, false);
}
