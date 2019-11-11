import React from 'react';
import AddNotes from './AddNotesComponent.js';
import AllNotes from './AllNotes.js'

const showNotes = () => {
  return (
    <div>
        <AddNotes/>
        <AllNotes/>
    </div>    
  );
}

export default showNotes;