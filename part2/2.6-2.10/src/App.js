import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNotes] = useState('a new ...')

  const addNote = (event) => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
        <form onSubmit={addNote}>
          <input value={newNote}/>
          <button type="submit">save</button>
        </form>
      </ul>
      
    </div>
  )
}

export default App;
