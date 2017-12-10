const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;

function handleCheck(e) {
	let inBetween = false;
	
	//jeżeli przy kliknięciu ckeckboxa był wciśnięty Shift oraz checkbox był w tym momencie zaznaczany, a nie odznaczany
	if (e.shiftKey && this.checked) {
		
		checkboxes.forEach(checkbox => {
			//jeżeli dany checkbox to ten, którego właśnie kliknęliśmy lub ten, który był kliknięty poprzednim razem, to...
			if (checkbox === this || checkbox === lastChecked) {
				
				inBetween = !inBetween;
			}
			//dopóki inBetween będzie true, czyli checkbox znajduje sie pomiędzy właśnie klikniętym (z Shiftem) checkboxem, a checkboxem klikniętym poprzednim razem, to oznacz checkbox jako checked
			if (inBetween === true){
				checkbox.checked = true;
			}
		})
	}
	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

