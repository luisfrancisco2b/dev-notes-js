// Elements
const notesContainer = document.querySelector("#notes-container")
const noteInput = document.querySelector("#note-content")
const addNoteBtn = document.querySelector(".add-note")

// Functions

// Show notes function
function showNotes() {

    getNotes().forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)
    })

}

// Add notes function
function addNote() {

    const notes = getNotes()

    // Note object
    const noteObject = {
        id: GenerateId(),
        content: noteInput.value,
        fixed: false,
    }

    const noteElement = createNote(noteObject.id, noteObject.content)

    notesContainer.appendChild(noteElement)

    notes.push(noteObject)

    saveNotes(notes)

    noteInput.value = ""
}

// Generate Id function
function GenerateId() {
    return Math.floor(Math.random() * 5000)
}

// Create notes function
function createNote(id, content, fixed) {

    // Div
    const element = document.createElement("div")
    element.classList.add("note")


    // Textarea
    const textarea = document.createElement("textarea")
    textarea.value = content
    textarea.placeholder = "O que deseja anotar?"

    element.appendChild(textarea)

    const pinIcon = document.createElement("i")
    pinIcon.classList.add(...["bi", "bi-pin"])

    element.appendChild(pinIcon)

    // Element events
    element.querySelector(".bi-pin").addEventListener("click", () => toggleFixNote())

    return element
}


// Local storage

function getNotes() {

    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    return notes
}

// Save notes function (local storage)
function saveNotes(notes) {

    localStorage.setItem("notes", JSON.stringify(notes))

}

// Events
addNoteBtn.addEventListener("click", () => addNote())

// Initialization
showNotes()