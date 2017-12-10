(function clock() {
	var handSec = document.querySelector(".hand-sec");
	var handHour = document.querySelector(".hand-hour");
	var handMin = document.querySelector(".hand-min");
	var date;
	var hour;
	var min;
	var sec;
	var hourPosition;
	var minPosition;
	var secPosition;
	
	(function getDate() {
		date = new Date();
		hour = date.getHours();
		hour = hour < 13? hour : hour - 12;
		console.log(hour);
		min = date.getMinutes();
		sec = date.getSeconds();
	})();
	
	function startHandHour(hour) {
		handHour.style.transform = `rotate(${270 + (hour * 30)}deg)`;
		hourPosition = 270 + (hour * 30);
	};

	function startHandSec(sec) {
		handSec.style.transform = `rotate(${270 + (sec * 6)}deg)`;
		secPosition = 270 + (sec * 6);
		console.log(secPosition);
	};
	function startHandMin(min) {
		handMin.style.transform = `rotate(${270 + (min * 6)}deg)`;
		minPosition = 270 + (min * 6);
	};
	
	startHandHour(hour);
	startHandMin(min);
	startHandSec(sec);
	
	function moveHandHour(hourPos) {
		hourPosition += 30;
		handHour.style.transform = `rotate(${hourPos + 30}deg)`;
	};
	
	function moveHandMin(minPos) {
		minPosition += 6;
		handMin.style.transform = `rotate(${minPos + 6}deg)`;
		if((minPosition - 270) % 360 === 0) {
			moveHandHour(hourPosition);
		}
	};
	
	function moveHandSec(secPos) {
		secPosition += 6;
		handSec.style.transform = `rotate(${secPos + 6}deg)`;
		if((secPosition - 270) % 360 === 0) {
			moveHandMin(minPosition);
		}		
		setTimeout(moveHandSec, 1000, secPosition);
	};

	moveHandSec(secPosition);
	
	
	
	
})();