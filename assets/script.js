const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// VARIABLE

// Slider Arrows
const leftArrow = document.querySelector(".arrow_left")
const rightArrow = document.querySelector(".arrow_right")

// Slider
const slider = document.querySelectorAll(".banner")

// Slides count
const slidesLength = slides.length

// dots
const dots = document.querySelector(".dots")

// index
let i = 0


// When the Left Arrow is clicked
leftArrow.addEventListener('click', () => {
	console.log('Previous')
})

// Whane the Right Arrow is clicled
rightArrow.addEventListener('click', () => {
	console.log('Next')
})