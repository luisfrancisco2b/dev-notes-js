// Elements
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")

// Functions
function getNote() {

    const noteObject = {
        id: GenerateId(),
        content: noteInput.value,
        fixed: false,
    }

    const noteElement = createNote(noteObject.id, noteObject.content)
}

function GenerateId() {
    return Math.floor(Math.random() * 5000)
}

function createNote(id, content, fixed) {

}

// Events
addNoteBtn.addEventListener("click", () => getNote())