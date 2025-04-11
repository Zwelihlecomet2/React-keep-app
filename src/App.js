import Navbar from "./components/Navbar/Navbar"; 
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";
import Note from "./components/Notes/Note";

let App = () =>{
  let notes = [
    {
      id: 1,
      title: "Title One",
      text: "Text One"
    },
    {
      id: 2,
      title: "Title Two",
      text: "Text Two"
    },
    {
      id: 3,
      title: "Title Three",
      text: "Text Three"
    },
    {
      id: 4,
      title: "Title Four",
      text: "Text Four"
    },
  ]
  return (
    <>
      <Navbar />
      <Sidebar />
      <Form />
      <Notes note = {notes}/>
      <Modal />
    </>
  );
}

export default App;
