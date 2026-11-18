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

    // Div
    const element = document.createElement("div")
    element.classList.add("note")


    // Textarea
    const textarea = document.createElement("textarea")
    textarea.value = content


}

// Events
addNoteBtn.addEventListener("click", () => getNote())