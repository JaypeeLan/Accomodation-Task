import { useState } from "react";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch.js";
import { ThreeDots } from "react-loading-icons";
import "array-flat-polyfill";
import Modals from "./Modals";

const DisplayOtherRoom = () => {
  // Used the Api domain name as proxy to bypass the CORS
  const { data, error, isLoading } = useFetch(`/api/rooms?hallId=biobaku`); //check line 5 in package.json file

  // ----------------------------------------------//
  const [modalToggle, setModalToggle] = useState(false);
  const [modalContent, setModalContent] = useState();

  // ---------------------------
  function flatten(ary) {
    var ret = [];
    for (var i = 0; i < ary.length; i++) {
      if (Array.isArray(ary[i])) {
        ret = ret.concat(flatten(ary[i]));
      } else {
        ret.push(ary[i]);
      }
    }
    return ret;
  }

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
              {flatten(data)?.map((rooms, index) => (
                <div
                  className="cards"
                  onClick={() => showRoomDetails(rooms)}
                  data-testid={`room-${index}`}
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

export default DisplayOtherRoom;
