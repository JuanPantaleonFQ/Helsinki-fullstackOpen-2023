import React, { useState } from 'react'
import Note from './Components/Note'
import './App.css'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState(
         '...'
  ) 
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()   
    setNotes([...notes, newNote]);
  }

  const handleNoteChange = (event) => {    
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App
