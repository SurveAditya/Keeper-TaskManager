import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
   const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
         <Zoom in={isExpanded}>
      <Fab onClick={submitNote} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
       </Zoom>


      </form>
    </div>
  );
}

export default CreateArea;
