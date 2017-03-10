// OUDE MANIER VAN WERKEN ES5
function CardApp(){
	this.buttonAddNote = document.getElementById("btnAddNote");
	this.notesContainer = document.querySelector(".notes");
	this.buttonAddContainer = document.querySelector(".notes");
	this.noteInput = document.querySelector("#txtAddNote");

	//bind gebruiken omdat als je this al direct na de haakje steekt die de formulier al gaat opsturen.
	this.buttonAddNote.addEventListener("click", this.addNote.bind(this));

}

CardApp.prototype.resetForm = function() {
	this.noteInput.value = "";
	this.noteInput.focus();
}


CardApp.prototype.addNote = function(e){
	var newNote = document.createElement("div"); //<div></div>
	newNote.setAttribute("class", "card"); // <div class='card'>
	newNote.innerHTML = "<p>" + this.noteInput.value + "</p>";

	var noteLink = document.createElement("a");
	noteLink.setAttribute("class", "card-remove");
	noteLink.innerHTML = "Remove";
	noteLink.setAttribute("href", "#");

	// this betekent hier niet de huidige klasse maar de huidie EVENT waar je op aan het klikken bent.
	noteLink.addEventListener("click", this.removeNote.bind(this));

	// dit voegt een note erbij.
	newNote.appendChild(noteLink);

	this.notesContainer.appendChild(newNote);
	this.resetForm();

}

CardApp.prototype.removeNote = function () {
	var noteToRemove = e.target.parentElement;
	// notesContainer is een Div met al onze childs in
	this.notesContainer.removeChild(noteToRemove);

	e.preventDefault();



}


var myApp = new CardApp();


// NIEUWE MANIER VAN WERKEN ES6

function talk ( permission ) {

	// VAR
	// Achter de schermen doet javascript => var talking;
	// javascript gaat dit van boven declareren, maar dit is onverwacht gedrag en gaat
	// voor problemen zorgen

	// LET zegt dat die variabele in die blok zit.
	if ( permission ) {
		// var wil je niet gebruiken want het is verwarrend wat de scope zou zijn van die variabele

		// hier declareren we dus LET wat dus enkel binnen de huidige blok gaat werken.
		let talking = "yes";
		console.log( talking );
	}
	else {
		console.log( talking );
	}
}

talk( false );


// * voorbeeld Template Strings, Simpel maar nieuw ;)

let firstname = "Joris";
let lastname = "Hens";
//oude manier
console.log("hi, my name is" + firstname + " " + lastname);
//nieuwe manier kan je meer html schrijven!!
console.log(' <h1 class= "test"> Hi, my name is ${firstname} ${lastname}');


// * Suiker toevoegen 

function Client {
	constructor(p_name){
		this.name = p_name;
		console.log('hi my name is $(this.name)');
	}
	
}

Client.prototype.talk = function(p_question){
	console.log(p_question);
}

let client1 = new Client();
client1.talk("Miguel, ist al klaar?");


// * Iets nieuws ook

let loc = [22.34, 56.2342];
function showLocation(lat, lng){
	console.log(lat);
	console.log(lng);
}

showlocation( ...loc );







