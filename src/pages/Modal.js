import { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal";

const Modal = ({ room_no, closeTheModal }) => {
  // -------------------------------------------//
  const payload = {
    hallId: "mariere",
    roomNo: room_no,
    matricNo: "000000001",
  };
  // ===============================================/

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const sendPostRequest = async () => {
   closeTheModal()
    await axios
      .post("/api/rooms", payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
      
  };
  // ===========================================/


  return (
    <>
      <div className="pop-up-container" onClick={closeTheModal}>
        <div onClick={(e) => e.stopPropagation()}>
          <div className="pop-up-header">
            <button onClick={closeTheModal}>x</button>
          </div>

          <p className="pop-up-content">
            Are you sure you want to book room {room_no}?
          </p>

          <button onClick={sendPostRequest}>Confirm</button>
        </div>
      </div>

      {/* ------------------------------------ */}
      <div>{data && <SuccessModal />}</div>
    </>
  );
};

export default Modal;
