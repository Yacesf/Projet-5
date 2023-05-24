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

const arrow_left = document.querySelector('.arrow_left')
arrow_left.addEventListener ('click' ,() => {ChangeSlide(-1)})

const arrow_right = document.querySelector('.arrow_right')
arrow_right.addEventListener ('click' ,() => {ChangeSlide(1)})

let numero = 0

const bullet_points = document.querySelectorAll('.dot')

const banner_text = document.querySelector('#banner p')

function ChangeSlide(sens) {
	numero = numero + sens
	if (numero > slides.length - 1)
			numero = 0
	if (numero < 0)
			numero = slides.length -1
			document.querySelector('.banner-img').src = "assets/images/slideshow/" + slides[numero].image
			banner_text.innerHTML = slides[numero].tagLine
			bullet_points.forEach(bullet_points => bullet_points.classList.remove('dot_selected'))
			bullet_points[numero].classList.add('dot_selected')
}