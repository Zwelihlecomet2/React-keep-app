import "./Notes.css";
import Note from "./Note";

let Notes = (props) => {
  const { note, deleteNote } = props;
  return (
    <div className="notes">
      {note.length === 0 && <p>No Notes Yet</p>}

      {note.length !== 0 &&
        note.map((note, index) => {
          if (note.title !== "" && note.text !== "") {
            return <Note key={index} id={note.id} title={note.title} text={note.text}  deleteNote={deleteNote}/>;
          }
        })}
    </div>
  );
};

export default Notes;
