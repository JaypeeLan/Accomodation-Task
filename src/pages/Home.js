import React from "react";
// ------------------images----------------//
import backIcon from "../files/back-icon.png";
import profileIcon from "../files/profile-icon.png";
import notiIcon from "../files/notification.png";
import reserved from "../files/reserved.png";
import available from "../files/available.png";
import no_availble from "../files/no-available.png";
import selected from "../files/selected.png";

import courses from "../files/Read.png";
import payment from "../files/payments.png";
import results from "../files/results-icon.png";
import more from "../files/more-icon.png";
// ------------------------------------------------
import DisplayOtherRoom from "./DisplayOtherRoom";
import DisplayRooms from "./DisplayRooms";

const Home = () => {
  return (
    <div id="home">
      <navbar>
        <div className="goBack">
          <img src={backIcon} alt="go back" />
        </div>

        <div className="profile">
          <div className="notifications">
            <img src={notiIcon} alt="notifications" />
          </div>
          <img src={profileIcon} alt="profile" />
        </div>
      </navbar>
      {/* --------------------------- */}
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

      {/* ------------------------------------------- */}

      <div className="instructions">
        <div className="color-instructions">
          <img src={reserved} alt="reserved room" />
          <img src={available} alt="available rooms" />
          <img src={no_availble} alt="no available rooms" />
          <img src={selected} alt="selected room" />
        </div>

        <div className="detailed_instructions">
          <span>All available rooms have been reserved</span>
          <span>All available rooms </span>
          <span>No available rooms </span>
          <span>Selected room</span>
        </div>
      </div>

      {/* ============================================= */}
      <div className="proceedBtn">
        <button>PROCEED</button>
      </div>

      <footer>
        <div>
          <img src={courses} alt="courses" />
          <span>courses</span>
        </div>
        <div>
          <img src={payment} alt="payments" />
          <span>payments</span>
        </div>
        <div>
          <img src={results} alt="results" />
          <span>results</span>
        </div>
        <div>
          <img src={more} alt="more options" />
          <span>more</span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
