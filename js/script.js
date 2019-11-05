/* ANIMATIE, BOEK TOEVOEGEN*/

var button = document.querySelector('.plus-button');
var bookmark = document.querySelector('.bookmark');
var bookmark1 = document.querySelector('.bookmark1');

function rotate() {
	button.classList.toggle('addbutton');
	bookmark.classList.toggle('hidden');
	bookmark1.classList.toggle('hidden');
}

button.addEventListener('click', rotate);

/* MOODBAR NAVIGATIE*/
// var moodbutton = document.querySelector('.heavyFeels');
// var moodbutton2 = document.querySelector('.feelGood');
// var article1 = document.querySelectorAll('.card');

// function mood() {
// 	article1.forEach(card => {
// 		card.classList.add('hidden');
// 	})
// 	moodbutton.classList.add('blue');
// 	moodbutton2.classList.add('white');
// }

// function mood2() {
// 	moodbutton.classList.toggle('blue');
// 	moodbutton2.classList.toggle('white');
// }

// moodbutton.addEventListener('click', mood);
// moodbutton2.addEventListener('click', mood2);

/* MOODBAR - hulp van GIJS LAARMAN*/
/* functie aangemaakt om kaarten te zien. variablen pakt classes uit HTML*/ 
function showCards() {
	var currentActive = document.querySelector('.mood-button.active').getAttribute('id')
	var cards = document.querySelectorAll('.card')

	cards.forEach(card => {
		if (!card.getAttribute('class').includes(currentActive)) {
			card.classList.add('hidden')
		} else {
			card.classList.remove('hidden')
		}
	})
}

var moodButtons = document.querySelectorAll('.mood-button')

moodButtons.forEach(button => {
	button.addEventListener('click', function() {
		console.log(this);

		if(this.getAttribute('class').includes('active')) {
			// If button is already active, do nothing.
			return
		}

		document.querySelector('.mood-button.active').classList.remove('active')
		this.classList.add('active')

		showCards()
	})
})

showCards()