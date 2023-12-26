import Note from "./Note"

const Notes = ({notes, onDelete, onToggle}) => {
    
  return (
    <ul>
      {notes.map((note)    => (
        <li key={note.id}>
          <Note key={note.id} note={note}
          onDelete={onDelete}
          onToggle={onToggle}
          
          />
        </li>
        ))}
    </ul>

    
  )
}

export default Notes