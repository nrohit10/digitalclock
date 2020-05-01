// setInterval methods calls updateTime function after every 1 seconds

let updateInterval = setInterval(updateTime, 1000);

function updateTime() {
	let todaysDate = new Date();

	let hours = todaysDate.getHours();
	let minutes = todaysDate.getMinutes();
	let seconds = todaysDate.getSeconds();

	//Set hour to paragraph with id time
	if(hours < 10){
		document.getElementById("time").innerHTML = "0" + hours;
	}
	else {
		document.getElementById("time").innerHTML = hours;
	}

	// Append colon to paragraph with id time
	document.getElementById("time").innerHTML += " : ";

	// Set minutes to paragraph with id time
	if(minutes < 10) {
		document.getElementById("time").innerHTML += "0" + minutes;
	} 
	else {
		document.getElementById("time").innerHTML += minutes;
	}

	// Append colon to paragraph with id time
	document.getElementById("time").innerHTML += " : ";

	// Set seconds to paragraph with id time
	if(seconds < 10) {
		document.getElementById("time").innerHTML += seconds;
	}
	else {
		document.getElementById("time").innerHTML += seconds;
	}

	// Days and Months Array
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
		"October", "November", "December"
	]

	//Get current day and time
	let day = todaysDate.getDay();
	let month = todaysDate.getMonth();

	// Assign day, month and date to paragraph with id date

	document.getElementById("date").innerHTML = days[day] + ", ";
	document.getElementById("date").innerHTML += months[month] + " " + (todaysDate.getDate());

}