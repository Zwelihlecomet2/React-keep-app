import React, { useState } from "react";
import { uid } from "uid";

import "./Form.css";

let Form = (props) => {
  // console.log(props);
  const { selectedNote, edit, toggleModal } = props;

  const [title, setTitle] = useState(edit && selectedNote.title || "");
  const [text, setText] = useState(edit && selectedNote.text || "");
  const [isActive, setActive] = useState(edit);

  const inActiveClickedOn = (event) => {
    setActive(true);
  };

  const submitForm = (event) => {
    event.preventDefault();

    if(!edit){
      setActive(false);

      const note = {
        id: uid(5),
        title,
        text,
      };
      props.addNote(note);
    }
    else{
      toggleModal();
    }

    setTitle("");
    setText("");
  };

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const textChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="form-container active-form" onClick={inActiveClickedOn}>
        <form
          onSubmit={submitForm}
          className={isActive ? "form" : ""}
          id="form"
        >
          {isActive && (
            <input
              onChange={titleChange}
              value={title}
              type="text"
              placeholder="title"
              id="note-title"
              className="note-title"
            />
          )}
          <input
            onChange={textChange}
            value={text}
            type="text"
            placeholder="Take a note... "
            id="note-text"
            className="note-text"
          />
          {isActive ? (
            <div className="form-actions">
              <div className="icons">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    add_alert
                  </span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    person_add
                  </span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    palette
                  </span>
                  <span className="tooltip-text">Change color</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    image
                  </span>
                  <span className="tooltip-text">Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    archive
                  </span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    more_vert
                  </span>
                  <span className="tooltip-text">More</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    undo
                  </span>
                  <span className="tooltip-text">Undo</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icons">
                    redo
                  </span>
                  <span className="tooltip-text">Redo</span>
                </div>
              </div>
              <button className="close-btn">Close</button>
            </div>
          ) : (
            <div className="form-actions">
              <input
                type="text"
                placeholder="Take a note... "
                className="note-text"
              />
              <div className="form-actions">
                <div className="tooltip">
                  <span className="material-symbols-outlined hover">
                    check_box
                  </span>
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
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;

// <div className="form-container inactive-form" onClick={inActiveClickedOn}>
// <form action="">
//     <input type="text" placeholder="Take a note... " className="note-text" />
//     <div className="form-actions">
//         <div className="tooltip">
//             <span className="material-symbols-outlined hover">check_box</span>
//             <span className="tooltip-text">New list</span>
//         </div>
//         <div className="tooltip">
//             <span className="material-symbols-outlined hover">brush</span>
//             <span className="tooltip-text">New note with drawing</span>
//         </div>
//         <div className="tooltip">
//             <span className="material-symbols-outlined hover">image</span>
//             <span className="tooltip-text">New note with image</span>
//         </div>
//     </div>
// </form>
// </div>
