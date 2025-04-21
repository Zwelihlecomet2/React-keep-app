import "./Modal.css";
import Form from "../Form/Form";

let Modal = (props) => {
  const { isModalOpen, selectedNote, toggleModal, editNote } = props;

  const handleCloseModal = (event) =>{
    return event.target.children[0] ? toggleModal() : "";
  }

  return (
    <div className={`modal ${isModalOpen ? "open-modal" : ""}`} onClick={handleCloseModal}>
      <div className="modal-content">
          <Form selectedNote={selectedNote} edit toggleModal={toggleModal} editNote={editNote}/>
      </div>
    </div>
  );
};

export default Modal;
