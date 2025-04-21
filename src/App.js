import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import Note from "./components/Notes/Note";

const NOTES = [];

let App = () => {
  const [note, setNote] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState({});

  const [isModalOpen, setModal] = useState(false);

  const toggleModal = (event) => {
    setModal((prevState) => {
      return !prevState;
    });
  };

  const addNote = (note) => {
    setNote((prevState) => {
      return [...prevState, note];
    });
  };

  const deleteNote = (id) => {
    setNote((prevState) => {
      return prevState.filter((note) => {
        return id !== note.id;
      });
    });
  };

  const editNote = (editedNote) =>{
    setNote(prevNote =>{
      const newArray = prevNote.map((e) =>{
        if(editedNote.id === e.id){
          e.title = editedNote.title;
          e.text = editedNote.text;
        }
        return e;
      });
      return newArray;
    });
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <Form addNote={addNote} toggleModal={toggleModal}/>
      <Notes
        note={note}
        deleteNote={deleteNote}
        toggleModal={toggleModal}
        setSelectedNote={setSelectedNote}
      />
      {
        isModalOpen && <Modal isModalOpen={isModalOpen} selectedNote={selectedNote} toggleModal={toggleModal} editNote={editNote}/>
      }
      
    </>
  );
};

export default App;
