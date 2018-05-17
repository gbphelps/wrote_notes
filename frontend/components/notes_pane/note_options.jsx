import React from 'react';
import { withRouter } from 'react-router-dom';


const NoteOptions = (props) => {

 const toggleShortcut = () => {
   console.log(props.note.shortcut);
   props.updateNote({
     id: props.note.id,
     shortcut: !props.note.shortcut
   })
 }

 const shortcutted = props.note.shortcut ? 'shortcutted' : '';

 return(
   <div className='note-options'>
     <div className='note-icon note-share'></div>
     <div className='note-icon note-reminder'></div>
     <div className={`note-icon note-star ${shortcutted}`}
          onClick={toggleShortcut}></div>
     <div className='note-icon note-trash'
          onClick={(e) => {
            props.deleteNote(props.note.id);}}>
     </div>
   </div>
 );
};

export default withRouter(NoteOptions)


//setTimeout(() => props.deleteNote(props.note.id),1000)
