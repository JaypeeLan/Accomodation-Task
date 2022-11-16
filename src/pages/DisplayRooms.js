import { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import { ThreeDots } from "react-loading-icons";

const DisplayRooms = () => {
  // Used the Api domain name as proxy to bypass the CORS
  const { data, error, isLoading } = useFetch(`/api/rooms?hallId=mariere`); //check line 5 in package.json file

  // ----------------------------------------------//
  const [modalToggle, setModalToggle] = useState(false);
  const [modalContent, setModalContent] = useState();

  const [stopScroll, setStopScroll] = useState(null);
  // ===============================================//

  const showRoomDetails = (rooms) => {
    setModalContent(rooms);
    setModalToggle(!modalToggle);

    // to prevent scroll while the modal is open
    if (stopScroll === null) {
      setStopScroll({ position: "fixed" });
    } else {
      setStopScroll(null);
    }
  };
  // ---------------------------------------------------==
  return (
    <section style={stopScroll}>
      {!!error ? (
        <p>{error}.</p>
      ) : isLoading ? (
        <div style={{ margin: "0 auto" }}>
          <ThreeDots stroke="#98ff98" />
        </div>
      ) : (
        // ----------------------------//
        <>
          {data && (
            <>
              {/* To access nested arrays without looping through each one, use flat method */}
              {data.flat(1)?.map((rooms) => (
                <div className="cards" onClick={() => showRoomDetails(rooms)}>
                  <Cards
                    roomNo={rooms?.roomNo}
                    spacesLeft={rooms?.spacesLeft}
                  />
                </div>
              ))}

              {modalToggle && (
                <ConfirmModal
                  room_no={modalContent.roomNo}
                  hall_id={modalContent.hallId}
                  closeTheModal={showRoomDetails}
                />
              )}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default DisplayRooms;
