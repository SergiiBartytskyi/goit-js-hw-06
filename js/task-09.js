function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refBtn = document.querySelector(".change-color");
const refColor = document.querySelector(".color");
const body = document.body;
refBtn.addEventListener("click", () => {
	let randomColor = getRandomHexColor();
	body.style.backgroundColor = randomColor;
	refColor.textContent = randomColor;
});
