const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const elementList = document.querySelector("#ingredients");

// 1.

// const makeIngredientList = values => {
// 	return values.map(value => {
// 		const elementLi = document.createElement("li");
// 		elementLi.classList.add("item");
// 		elementLi.textContent = value;

// 		return elementLi;
// 	});
// };
// const elements = makeIngredientList(ingredients);
// console.log(elements);

// elementList.append(...elements);

// 2.
const res = ingredients.map(ingredient => {
	const elementLi = document.createElement("li");
	elementLi.classList.add("item");
	elementLi.textContent = ingredient;

	return elementLi;
});

elementList.append(...res);
console.log(elementList);
