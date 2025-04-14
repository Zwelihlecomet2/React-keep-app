import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar"; 
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import Note from "./components/Notes/Note";

const NOTES = [
  {
    id: 1,
    title: "Title One",
    text: "Text One"
  },
];

let App = () =>{

  const [notes, setNote] = useState(NOTES);

  const addNote = (note) =>{
    setNote((prevState) =>{
      return [...notes, note];
    });
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote}/>
      <Notes note = {notes}/>
      <Modal />
    </>
  );
}

export default App;
