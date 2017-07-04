var keys = [].slice.call(document.querySelectorAll(".key"));
var recentKey;
var recentSound;
var noteValue = "";
var noteField = document.querySelector(".note");

// function keyboard(e) {
	// var code = e.which;
	// for(var i = 0; i < keys.length; i++) {
		// if(code == keys[i].dataset.key) {
			// if(recentKey) {
				// recentKey.classList.remove("pressed");
			// }
			// keys[i].classList.add("pressed");
			
			// recentKey = keys[i];
			// recentKey.currentTime = 0;
			// recentKey.play();
			// noteValue += String.fromCharCode(code);
			// noteField.innerHTML = noteValue;
			// break;
		// }
	// }
// }

function keyboard(e) {
	if(recentKey) {
		recentKey.classList.remove("pressed");
	}
	recentKey = document.querySelector(`div[data-key="${e.which}"]`);
	recentSound = document.querySelector(`audio[data-key="${e.which}"]`);
	recentSound.currentTime = 0;
	recentSound.play();
	recentKey.classList.add("pressed");
	
	var code = e.which;

			noteValue += String.fromCharCode(code);
			noteField.innerHTML = noteValue;

}

function keyUp() {
	recentKey.classList.remove("pressed");
}

// function check(e) {
	// console.log(e.which);
// }

document.addEventListener("keypress", keyboard, false);
// document.addEventListener("keypress", check, false);
document.addEventListener("keyup", keyUp, false);