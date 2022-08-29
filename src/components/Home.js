import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel variant="dark">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/SM.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/EM.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/SupM.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/DM.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
