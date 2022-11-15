import { useRef } from "react";
const Cards = (props) => {
  const card = useRef(null);
  const changeStyle = () => {
    card.current.style.backgroundColor = "#daf0e3";
    card.current.style.border = "1px solid #0b9e43";
  };

  return (
    <div
      className="card card_details"
      ref={card}
      onClick={changeStyle}
      style={{
        backgroundColor: props.spacesLeft > 0 ? "#bfdeff" : "#ececec",
        cursor: "pointer",
      }}
    >
      <p>{props.roomNo}</p>
      <span>({props.spacesLeft})</span>
    </div>
  );
};git commit -m "updated error messages, POST request and home component"

export default Cards;
