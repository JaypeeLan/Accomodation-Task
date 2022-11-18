import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// ----
import {Puff}  from 'react-loading-icons'

const Modals = ({ hall_id, room_no, setModalToggle }) => {
  // -------------------------------
  const [confirmBooking, setConfirmBooking] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // handle opening and closing of modal
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setModalToggle(false);
    setOpen(false);
  };

  // ==============================
  //for the success modal

  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  //

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    maxWidth: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  // -------------------------------------
  const sendPostRequest = async () => {
    setConfirmBooking(!confirmBooking);
    setBookingSuccess(true);
    // -------------------------------------------//
    const payload = {
      hallId: hall_id,
      roomNo: room_no,
      matricNo: "000000001",
    };
    // --------------------------------------
    await axios
      .post("/api/rooms", payload)
      .then((response) => setData(response.data))
      .catch((error) => setError("An error occurred. Please try again."))
      .finally(() => setLoaded(true));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {confirmBooking && (
            <>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Are you sure you want to book room {room_no}
              </Typography>
              <Button
                variant="outlined"
                color="success"
                onClick={sendPostRequest}
              >
                Confirm
              </Button>
            </>
          )}
          {bookingSuccess &&
            (!!error ? (
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {error}
              </Typography>
            ) : !loaded ? (
              <Puff stroke="#98ff98" strokeOpacity={0.125} speed={0.75} />
            ) : (
              <>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Your Room {room_no} has been booked successfully.
                </Typography>
              </>
            ))}
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
