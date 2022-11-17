import { useState } from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import { ThreeDots } from "react-loading-icons";
import Modals from "./Modals";

const DisplayOtherRoom = () => {
  // Used the Api domain name as proxy to bypass the CORS
  const { data, error, isLoading } = useFetch(`/api/rooms?hallId=biobaku`); //check line 5 in package.json file

  // ----------------------------------------------//
  const [modalToggle, setModalToggle] = useState(false);
  const [modalContent, setModalContent] = useState();

  // -------------------------------------------------//
  const showRoomDetails = (rooms) => {
    setModalContent(rooms);
    setModalToggle(!modalToggle);
  };
  // ---------------------------------------------------==
  return (
    <section>
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
                <div
                  className="cards"
                  onClick={() => showRoomDetails(rooms)}
                  key={rooms.roomNo}
                >
                  <Cards
                    roomNo={rooms?.roomNo}
                    spacesLeft={rooms?.spacesLeft}
                  />
                </div>
              ))}

              {modalToggle && (
                <Modals
                  room_no={modalContent.roomNo}
                  hall_id={modalContent.hallId}
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
