const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryList = document.querySelector(".gallery");

const imageElement = images
	.map(image => `<li class="gallery__item"><img class="gallery__img" src="${image.url}" alt="${image.alt}"></li> `)
	.join("");
console.log(imageElement);
galleryList.insertAdjacentHTML("afterbegin", imageElement);

// const makeImageCart = ({ url, alt }) => {
// 	const itemEl = document.createElement("li");
// 	itemEl.classList.add("gallery__item");

// 	const imgEl = document.createElement("img");
// 	imgEl.classList.add("gallery__img");
// 	imgEl.src = url;
// 	imgEl.alt = alt;

// 	itemEl.append(imgEl);
// 	return itemEl;
// };

// const res = images.map(makeImageCart);

// galleryList.append(...res);
// console.log(galleryList);
