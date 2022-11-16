import { useState } from "react";
import axios from "axios";
import SuccessModal from "./SuccessModal";


const ConfirmModal = ({ room_no, closeTheModal, hall_id }) => {
  // -------------------------------------------//
  const payload = {
    hallId:hall_id,
    roomNo: room_no,
    matricNo: "000000001",
  };
  // ===============================================/
  //for the success modal

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  // ------------------------------------//
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);


  // ============================================//

  const sendPostRequest = () => {
    closeTheModal();
    axios
      .post("/api/rooms", payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
      console.log(data);
    // open success modal
    handleOpen();
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

      {open && <SuccessModal error={error} loaded={loaded} />}
    </>
  );
};

export default ConfirmModal;
