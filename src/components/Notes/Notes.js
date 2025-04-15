import "./Notes.css";
import Note from "./Note";

let Notes = (props) =>{
    const { note } = props;
    return(
        <div className="notes">
            {
                note.length === 0 && <p>No Notes Yet</p>
            }

            {
                note.length !== 0 && note.map((note, index) =>{
                    if(note.title !== "" && note.text !== ""){
                        return <Note key={index} title = {note.title} text = {note.text}/>
                    }
                })
            }
        </div>
    )
}

export default Notes;