const createBtn = document.querySelector("[data-create]");
console.log(createBtn);
const destroyBtn = document.querySelector("[data-destroy]");
console.log(destroyBtn);
const inputNumber = document.querySelector("input");
console.log(inputNumber);
const listOfBoxes = document.querySelector("#boxes");
console.log(listOfBoxes);

const initialDimension = 30;

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
	const boxes = Number(inputNumber.value);
	const arrayOfBoxes = [];

	for (let i = 0; i < boxes; i += 1) {
		const div = document.createElement("div");
		const currentDimension = initialDimension + i * 10;
		div.style.backgroundColor = getRandomHexColor();
		div.style.width = `${currentDimension}px`;
		div.style.height = `${currentDimension}px`;
		arrayOfBoxes.push(div);
	}
	listOfBoxes.append(...arrayOfBoxes);
}

function destroyBoxes() {
	listOfBoxes.innerHTML = "";
	inputNumber.value = "";
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
