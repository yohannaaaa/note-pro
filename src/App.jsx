import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import Display from './components/Display'


function App() {
  const[ showAddNote, setShowAddNote] = useState(true)
  const [notes, setNotes] = useState([])

  //Add Note

  const addNote =(note) => {
    console.log('Adding note:', note);

    const id = Math.floor(Math.random() * 10000) + 1
    const newNote = {id, ...note }
    setNotes([...notes, newNote])
  }

  //Delete Note

  const deleteNote = (id)=>
{
  setNotes(notes.filter((note) => note.id !== id ))
}

//Update

const updateNote =(updatedNote) =>{
  console.log('Updating note:', updatedNote);
  setNotes((prevNotes) =>
  prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note)));
}

const toggleReminder = (id) => {
  setNotes(
     notes.map((note) => 
     note.id === id ? {...note, reminder: 
     !note.reminder} : note ))
 }
 

  return (
    <div className='container'>

    <Header 
        onAdd ={() => setShowAddNote 
          (!showAddNote)} 
          showAdd={showAddNote} />
          {showAddNote &&<AddNote onAdd={addNote} />}

          {notes.length > 0 ? 
    ( <Notes notes={notes} onDelete={deleteNote} onToggle={toggleReminder} onUpdate={updateNote}/>) 
    
      : ( 'No Notes to show')}
    
    </div>
  )
}

export default App
