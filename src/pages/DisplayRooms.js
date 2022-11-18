import { useState } from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch.js";
import { ThreeDots } from "react-loading-icons";
import Modals from "./Modals";

const DisplayRooms = () => {
  // Used the Api domain name as proxy to bypass the CORS
  const { data, error, isLoading } = useFetch(`/api/rooms?hallId=mariere`); //check line 5 in package.json file

  // --------------To flatten the nested arrays in the API
  Array.prototype.flatten = function () {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      if (Array.isArray(this[i])) {
        arr = arr.concat(this[i].flatten());
      } else {
        arr.push(this[i]);
      }
    }
    return arr;
  };

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
          <ThreeDots stroke="#FF0000" />
        </div>
      ) : (
        // ----------------------------//
        <>
          {data && (
            <>
              {data.flatten()?.map((rooms) => (
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
                  spacesLeft={modalContent.spacesLeft}
                  setModalToggle={setModalToggle}
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
