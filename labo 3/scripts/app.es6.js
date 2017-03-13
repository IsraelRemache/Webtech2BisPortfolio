class CardApp {
	constructor(){
		//Hier nemen we de values van de elementen met bijhorende ID's
		this.buttonContainer = document.querySelector(".notes");
		this.noteInput = document.querySelector("#txtAddNote");
		this.notesContainer = document.querySelector(".notes");
		this.buttonAddNote = document.getElementById("btnAddNote");
		

		// Hier zeggen we wat click moet doen
		// Bind gebruiken we zodat de formulier nog niet zou gestuurd worden
		this.buttonAddNote.addEventListener("click", this.addNote.bind(this));


	}
	

	
	// Hier gaan we de from terug leeg maken
	resetForm(){
		this.noteInput.value = "";
		this.noteInput.focus();

	}
	// Hier gaan we de Notes die we invullen toevoegen
	addNote(e){

		let message = this.noteInput.value;

		let newNote = document.createElement("div");
		newNote.setAttribute("class","card");
		newNote.innerHTML = "<p>" + message + "</p>";
		

		let noteLink = document.createElement("a");
		noteLink.setAttribute("class","card-remove");
		noteLink.innerHTML = "Remove";
		noteLink.setAttribute("href","#");

		//This betekent hier de event waar in je bent aan het klikken
		noteLink.addEventListener("click", this.removeNote.bind(this));
		newNote.appendChild(noteLink);

		this.notesContainer.appendChild(newNote);
		this.resetForm();

		//Bij het versturen van een formulier gaan we de pagina 
		//tegenhouden om te refreshen en naar boven te gaan
		e.preventDefault();

	}

	removeNote(e){

        let noteToRemove = e.target.parentElement;
        // notesContainer is een Div met al onze childs in
        this.notesContainer.removeChild(noteToRemove);

        e.preventDefault();
		
	

	}
	
	// Opslaan van notes moet nog gebeuren

	

}

var myApp = new CardApp();