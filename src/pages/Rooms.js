import React from "react";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import Footer from "../components/Footer";

function Rooms() {
  return (
    <>
      <div className="roomsHero">
        <Banner title="our rooms" button="return home" link="/"></Banner>
      </div>
      <RoomsContainer />
      <Footer />
    </>
  );
}

export default Rooms;
