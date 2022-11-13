const numberOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach(element => {
	console.log("Category:", element.firstElementChild.innerHTML);
	console.log("Elements:", element.lastElementChild.children.length);
});
