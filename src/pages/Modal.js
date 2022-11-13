import React from "react";

const Modal = ({ room_details, closeModal }) => {
  return (
    <div className="pop-up-container" onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <div className="pop-up-header">
          <button onClick={closeModal}>x</button>
        </div>

        <p className="pop-up-content">Are you sure you want to book room {room_details}?</p>

        <button>Confirm</button>
      </div>
    </div>
  );
};

export default Modal;
