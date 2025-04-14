import React, { useState } from "react";

import "./Form.css";

let Form = (props) =>{ 
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const submitForm = (event) =>{
        event.preventDefault();

        const note = {
            id: "123",
            title,
            text
        };
        props.addNote(note);
        setTitle("");
        setText("");
    };

    const titleChange = (event) =>{
        setTitle(event.target.value);
    };

    const textChange = (event) =>{
        setText(event.target.value);
    };


    return(
        <div>
            
            {/* <div className="form-container inactive-form">
                <form action="" onClick = {inactiveFormClickedOn}>
                    <input type="text" placeholder="Take a note... " className="note-text" />
                    <div className="form- actions">
                        <div className="tooltip">
                            <span className="material-symbols-outlined hover">check_box</span>
                            <span className="tooltip-text">New list</span>
                        </div>
                        <div className="tooltip">
                            <span className="material-symbols-outlined hover">brush</span>
                            <span className="tooltip-text">New note with drawing</span>
                        </div>
                        <div className="tooltip">
                            <span className="material-symbols-outlined hover">image</span>
                            <span className="tooltip-text">New note with image</span>
                        </div>
                    </div>
                </form>
            </div> */}
    
            <div className="form-container active-form">
                <form onSubmit={submitForm} className="form" id="form">
                    <input onChange = {titleChange} value={title} type="text" placeholder="title" id="note-title" className="note-title" /> 
                    <input onChange={textChange} value={text} type="text" placeholder="Take a note... " id="note-text" className="note-text" />
                    <div className="form-actions">
                        <div className="icons">
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">add_alert</span>
                                <span className="tooltip-text">Remind me</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">person_add</span>
                                <span className="tooltip-text">Collaborator</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">palette</span>
                                <span className="tooltip-text">Change color</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">image</span>
                                <span className="tooltip-text">Image</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">archive</span>
                                <span className="tooltip-text">Archive</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">more_vert</span>
                                <span className="tooltip-text">More</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">undo</span>
                                <span className="tooltip-text">Undo</span>
                            </div>
                            <div className="tooltip">
                                <span className="material-symbols-outlined hover small-icons">redo</span>
                                <span className="tooltip-text">Redo</span>
                            </div>
                        </div>
                        <button className="close-btn">Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;