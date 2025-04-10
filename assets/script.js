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
const slider = document.getElementById("banner")

// Slides count
const slidesLength = slides.length

// dots
const dots = document.querySelector(".dots")

// index
let i = 0


// When the Left Arrow is clicked
leftArrow.addEventListener('click', () => {
	const img = banner.querySelector('.banner-img')
	const tagLine = banner.querySelector('.tagline')
	if(i === 0) {
		i = slidesLength - 1
	} else {
		i--
	}
	img.src = "./assets/images/slideshow/" + slides[i].image
	tagLine.innerHTML = slides[i].tagLine
})

// When the Right Arrow is clicked
rightArrow.addEventListener('click', () => {

	console.log('Next')
})