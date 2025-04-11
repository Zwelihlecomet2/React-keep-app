import "./Notes.css";
import Note from "./Note";

let Notes = (props) =>{
    const { note } = props;
    console.log(note);
    return(
        <div className="notes">
            <Note title = {note[0].title} text = {note[0].text}/>
            <Note title = {note[1].title} text = {note[1].text}/>
        </div>
    )
}

export default Notes;