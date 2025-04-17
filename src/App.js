import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import Note from "./components/Notes/Note";

const NOTES = [
  // {
  //   id: Math.random() + "abc",
  //   title: "Title One",
  //   text: "Text One"
  // },
];

let App = () => {
  const [notes, setNote] = useState(NOTES);

  const addNote = (note) => {
    setNote((prevState) => {
      return [...prevState, note];
    });
  };

  const deleteNote = (id) =>{
    setNote((prevState) =>{
      return prevState.filter((note) =>{
        return id !== note.id;
      });
    })
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} />
      <Notes note={notes}  deleteNote={deleteNote}/>
      <Modal />
    </>
  );
};

export default App;
