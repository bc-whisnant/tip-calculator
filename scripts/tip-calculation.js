var totalAmount = document.getElementById('total-amount-text').value;

document.getElementById('bad-button').addEventListener('click', badButtonPressed);

document.getElementById('good-button').addEventListener('click', goodButtonPressed);

document.getElementById('great-button').addEventListener('click', greatButtonPressed);


function badButtonPressed() {
	// console.log("bad");
	var totalAmount = parseInt(document.getElementById('total-amount-text').value);
	// totalAmount = parseInt(totalAmount);
	var tipAmount = (totalAmount * 0.05);
	// console.log(tipAmount);
	var amountWithTip = totalAmount + tipAmount;
	// console.log(amountWithTip);
	amountWithTipString = String(amountWithTip);
	document.getElementById('total-amount-span').innerHTML = amountWithTipString;
}

function goodButtonPressed() {
	// console.log("bad");
	var totalAmount = parseInt(document.getElementById('total-amount-text').value);
	// totalAmount = parseInt(totalAmount);
	var tipAmount = (totalAmount * 0.10);
	// console.log(tipAmount);
	var amountWithTip = totalAmount + tipAmount;
	// console.log(amountWithTip);
	amountWithTipString = String(amountWithTip);
	document.getElementById('total-amount-span').innerHTML = amountWithTipString;
}

function greatButtonPressed() {
	// console.log("bad");
	var totalAmount = parseInt(document.getElementById('total-amount-text').value);
	// totalAmount = parseInt(totalAmount);
	var tipAmount = (totalAmount * 0.15);
	// console.log(tipAmount);
	var amountWithTip = totalAmount + tipAmount;
	// console.log(amountWithTip);
	amountWithTipString = String(amountWithTip);
	document.getElementById('total-amount-span').innerHTML = amountWithTipString;
}

