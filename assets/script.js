const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		image: "slide2.jpg",
		tagLine:
			"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
];

// VARIABLE

// Slider Arrows
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

// Slider
const slider = document.getElementById("banner");

// Slides count
const slidesLength = slides.length;

// dots
const dots = document.querySelector(".dots");

// index
let i = 0;

const changeSlider = () => {
	const img = banner.querySelector(".banner-img");
	const tagLine = banner.querySelector(".tagline");
	img.src = "./assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine;
	dots.querySelector(".dot_selected").classList.remove("dot_selected");
	dots.childNodes[i + 1].classList.add("dot_selected");
};

// When the Left Arrow is clicked
leftArrow.addEventListener("click", () => {
	if (i === 0) {
		i = slidesLength - 1;
	} else {
		i--;
	}
	changeSlider();
});

// When the Right Arrow is clicked
rightArrow.addEventListener("click", () => {
	if (i === slidesLength - 1) {
		i = 0;
	} else {
		i++;
	}
	changeSlider();
});

// Create as many dots as slides
for (let i = 0; i < slidesLength; i++) {
	// Create a dot
	const createDot = document.createElement("div");
	// Add a class to the new element
	createDot.classList.add("dot");
	// Add the new element into the right parent
	dots.appendChild(createDot);
	if (i === 0) {
		createDot.classList.add("dot_selected");
	}
}
