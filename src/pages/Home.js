import React from "react";
import DisplayOtherRoom from "./DisplayOtherRoom";
import DisplayRooms from "./DisplayRooms";

const Home = () => {
  return (
    <div id="home">
      <div id="homepage">
        <h2> Select a room</h2>
        <p>Select a room from the options below to complete your application</p>

        <div className="halls">
          <div className="floor">
            <p>Third floor</p>
            <span>5 rooms remaining</span>
            <DisplayRooms />
          </div>

          {/* -------------------------------------- */}
          <div className="floor">
            <p>Fourth floor</p>
            <span>5 rooms remaining</span>
            <DisplayOtherRoom />
          </div>
        </div>
      </div>

      {/* ============================================= */}
      <div className="proceedBtn">
        <button>PROCEED</button>
      </div>
    </div>
  );
};

export default Home;
