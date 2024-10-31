import React,{useContext} from 'react'
import noteContext from "../context/notes/noteContext";
import Noteitems from './Noteitems';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes, setNotes} = context;
  return (
    <div className="row my-3">
      <h2>You Notes</h2>
      {notes.map((note)=>{
        return <Noteitems note={note} />
      })}
      </div>
  )
}

export default Notes
