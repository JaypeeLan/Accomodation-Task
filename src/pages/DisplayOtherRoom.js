import { useState } from "react";
import Modal from "./Modal";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import { ThreeDots } from "react-loading-icons";

const DisplayOtherRoom = () => {
  // Used the Api domain name as proxy to bypass the CORS
  const { data, error, isLoading } = useFetch(`/api/rooms?hallId=biobaku`); //check line 5 in package.json file

  // ----------------------------------------------//
  const [modalToggle, setModalToggle] = useState(false);
  const [modalContent, setModalContent] = useState();
  // to prevent scroll while the modal is open
  const [stopScroll, setStopScroll] = useState(null);
  // ===============================================//

  // -------------------------------------------------//
  const showRoomDetails = (rooms) => {
    setModalContent(rooms);
    setModalToggle(!modalToggle);
    // ----------------------------
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
              {data.flat(1)?.map((rooms) => (
                <div className="cards" onClick={() => showRoomDetails(rooms)}>
                  <Cards
                    roomNo={rooms?.roomNo}
                    spacesLeft={rooms?.spacesLeft}
                  />
                </div>
              ))}

              {modalToggle && (
                <Modal
                  room_no={modalContent.roomNo}
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

export default DisplayOtherRoom;
