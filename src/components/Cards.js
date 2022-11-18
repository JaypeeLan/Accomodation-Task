import { useRef } from "react";
const Cards = (props) => {
  const card = useRef(null);
  const colors = {
    availableRooms: "#bfdeff",
    noAvailableRooms: "#ececec",
    selectedRoom: "#daf0e3",
    selectedRoomBorder: "#0b9e43",
  };
  const changeStyle = () => {
    card.current.style.backgroundColor = `${colors.selectedRoom}`;
    card.current.style.border = `1px solid ${colors.selectedRoomBorder}`;
  };

  return (
    <div
      className="card card_details"
      ref={card}
      onClick={changeStyle}
      style={{
        backgroundColor:
          props.spacesLeft > 0
            ? `${colors.availableRooms}`
            : `${colors.noAvailableRooms}`,
        cursor: "pointer",
      }}
    >
      <p>{props.roomNo}</p>
      <span>({props.spacesLeft})</span>
    </div>
  );
};

export default Cards;
