

var inputs = [].slice.call(document.querySelectorAll(".controls input"));

function valueUpdate() {
	var suffix = this.dataset.suffix || "";
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

for(var i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("change", valueUpdate, false);
}