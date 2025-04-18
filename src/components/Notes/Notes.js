import "./Notes.css";
import Note from "./Note";

let Notes = (props) => {
  const { note, deleteNote, toggleModal, setSelectedNote } = props;
  return (
    <div className="notes">
      {note.length === 0 && <p>No Notes Yet</p>}

      {note.length !== 0 &&
        note.map((note, index) => {
          if (note.title !== "" && note.text !== "") {
            return (
              <Note
                key={index}
                note={note}
                deleteNote={deleteNote}
                toggleModal={toggleModal}
                setSelectedNote={setSelectedNote}
              />
            );
          }
        })}
    </div>
  );
};

export default Notes;
