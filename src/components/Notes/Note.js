import React, { use, useState } from "react";
import "./Notes.css";

let Note = (props) => {
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);
  const [isHover, setHover] = useState(false);

  const noteClicked = () => {
    setTitle("Title Changes");
    setText("Text Changes");
  };

  const hoverOver = (event) => {
    setHover(true);
  };

  const hoverOut = (event) => {
    setHover(false);
  };

  return (
    <div
      className="note"
      onClick={noteClicked}
      onMouseOver={hoverOver}
      onMouseOut={hoverOut}
    >
      <span
        className="material-symbols-outlined check-circle"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
        check_circle
      </span>
      <div className="title">{title}</div>
      <div className="text">{text}</div>
      <div
        className="note-footer"
        style={{ visibility: isHover ? "visible" : "hidden" }}
      >
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
        <div className="tooltip archive">
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
      </div>
    </div>
  );
};

export default Note;
