// Select the counter paragraph and the button
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

let counterValue = 0;

incrementButton.addEventListener("click" , () => {

	alert(`Current value: ${counterValue}`);

	counterValue++;

	counterParagraph.textContent = counterValue;
})
