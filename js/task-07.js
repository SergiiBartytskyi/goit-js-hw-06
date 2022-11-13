const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", event => {
	const valueEl = event.currentTarget.value;
	spanEl.style.fontSize = valueEl + "px";
});
