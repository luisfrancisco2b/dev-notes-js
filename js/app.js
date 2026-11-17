// Elements
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")

// Functions
function getNote() {

    const noteObject = {
        id: 1,
        content: "",
        fixed: false,
    }


}

function GenerateId() {
    return Math.floor(Math.random() * 5000)
}

// Events
addNoteBtn.addEventListener("click", () => getNote())