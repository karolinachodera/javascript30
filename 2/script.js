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
		handHour.style.transform = `rotate(${hourPos + 30}deg)`;
		hourPosition += 30;
		setTimeout(moveHandHour, 3600000, hourPosition);
	}
	
	function moveHandSec(secPos) {
		handSec.style.transform = `rotate(${secPos + 6}deg)`;
		secPosition += 6;
		setTimeout(moveHandSec, 1000, secPosition);
	}
	
	function moveHandMin(minPos) {
		handMin.style.transform = `rotate(${minPos + 6}deg)`;
		minPosition += 6;
		setTimeout(moveHandMin, 60000, minPosition);
	}
	
	moveHandHour(hourPosition);
	moveHandSec(secPosition);
	moveHandMin(minPosition);
	
	
	
	
})();