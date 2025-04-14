import "./Notes.css";
import Note from "./Note";

let Notes = (props) =>{
    const { note } = props;
    return(
        <div className="notes">
            {note.map((note, index) =>{
                return <Note key={index} title = {note.title} text = {note.text}/>
            })}
        </div>
    )
}

export default Notes;