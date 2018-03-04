var buttonClass = document.getElementsByClassName('button');

for (var i = 0 ; i < buttonClass.length ; i++) {
	var buttonText = buttonClass[i].innerText;
	console.log(buttonText);
}