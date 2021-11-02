import { useState } from "react";
import React from "react";
import "./myForm.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function MyForm(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function nameChangeHandler(event) {
    setName(event.target.value);
  }

  function ageChangeHandler(event) {
    setAge(event.target.value);
  }

  //all modal function

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function formSubmit(event) {
    event.preventDefault();

    if (name.length < 1 || age.length < 1) {
      openModal();
      return;
    } else {
      props.getData(name, age);
    }
  }

  return (
    <div className="myForm">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        id="mymodel"
      >
        {/* MOdal design start */}

        <div id="popup">
          <div id="popupHeader">
            {" "}
            <h1>
              <b>Invalid Input</b>
            </h1>
          </div>
          <div className="modelContent ">
            <p>
              <b> Please enter a valid name and age (non-empty values).</b>
            </p>
          </div>
        </div>

        {/* MOdal design end */}
        <button onClick={closeModal}>close</button>
      </Modal>
      <div className="formBox">
        <div className="inputField">
          <form onSubmit={formSubmit}>
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold labelling"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              // placeholder={name}
              onChange={nameChangeHandler}
            />
            <br />
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label fw-bold labelling"
            >
              Age (Years)
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              // placeholder={age}
              onChange={ageChangeHandler}
            />
            <button
              type="submit"
              className="btn btn-success addUser"
              id="yourAppElement"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
