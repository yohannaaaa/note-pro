import { FaTimes} from 'react-icons/fa'

const Note = ({ note, onDelete, onToggle}) => {
  return (
    <div className={`task ${note.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(note.id)}>
    <h3>
      {note.text} 
      <FaTimes style={{ color: 'red', cursor: 'pointer', marginLeft: 'auto' }} onClick={() => onDelete(note.id)} />
    </h3>
    <p>{note.mainTopic}</p>
    <p>{note.subTopic}</p>
    <p>{note.content}</p>
  </div>
  )
}

export default Note