import React, { Component } from "react";
import Banner from "../components/Banner";
import Service from "../components/Service";
import FeaturedRooms from "../components/FeaturedRooms";
import Button from "../components/Styled";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <div className="defaultHero">
          <Banner
            title="Luxurious rooms"
            subTitle="deluxe room starting at $299"
            button="OUR ROOMS"
            link="/rooms"
          ></Banner>
        </div>
        <Service />
        <FeaturedRooms />
        <Footer />
      </>
    );
  }
}

export default Home;
