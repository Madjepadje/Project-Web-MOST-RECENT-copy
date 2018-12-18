/* MOBILE FILTER UITKLAPPEN*/
var filterbutton = document.querySelector('.filterbutton');
var filtermenu = document.querySelector('.filters');
var closebutton = document.querySelector('.filterknop');


function filteropen() {
	filtermenu.classList.toggle('hidden');
	filterbutton.classList.toggle('hidden');
	filtermenu.classList.toggle('menuanimation');
}

filterbutton.addEventListener('click', filteropen);
closebutton.addEventListener('click', filteropen);




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
var moodbutton = document.querySelector('.heavyFeels');
var moodbutton2 = document.querySelector('.feelGood');
var article1 = document.querySelector('.card');


function mood() {
	article1.classList.toggle('hidden');
	moodbutton.classList.toggle('blue');
	moodbutton2.classList.toggle('white');
}

function mood2() {
	moodbutton.classList.toggle('blue');
	moodbutton2.classList.toggle('white');
}

moodbutton.addEventListener('click', mood);
moodbutton2.addEventListener('click', mood2);

