// document.getElementsByClassName("slot").onclick = function(){
// 	document.getElementById("btn").style.color = 'green';
// }

// document.getElementById("btn").onclick = function(){
// 	document.getElementById("slot").style.color = 'red';
// }
console.log("hello world!");
 let slots = ["unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked", "unbooked"]
 console.log(slots.length)

 function getSlot(slot) {
		console.log('Rachael', slots[slot])
		let buttonClicked = document.getElementById(slot) 
		console.log('buttonClicked', buttonClicked)
		buttonClicked.innerText = "booked"
		buttonClicked.style.backgroundColor = "red"
		let vehicle = prompt("What type of vehicle, Small or Large","")
		console.log(vehicle)
		if (vehicle == "small" && slot <= 11) {
			alert("Booking Successful")
		} else if (vehicle == "large" && slot >= 12) {
			alert("Booking Successful")
		} else {
			 alert("Error: Invalid vehicle type")
			 buttonClicked.style.backgroundColor = "#c1c7c6"
			 buttonClicked.innerText = "unbooked"
		}
		
}