import React from "react";

import Carousel from "nuka-carousel";
const CarouselHome = () => {
  return (
    <div>
      <Carousel
        wrapAround={true}
        autoplay={true}
        pauseOnHover={false}
        autoplayInterval={3000}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            onClick={previousSlide}
            className="banner-carousel-render-center-left-controls"
          >
            <img
              src={"https://i.ibb.co/HhGPJ5L/back.png"}
              alt=""
              className="w-100 h-100"
            />
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            onClick={nextSlide}
            className="banner-carousel-render-center-right-controls"
          >
            <img src={"https://i.ibb.co/HhGPJ5L/back.png"} alt="" />
          </button>
        )}
      >
        <div className="carousel-home">
          <figure className="position-relative d-flex align-items-center justify-content-center  h-100">
            <img
              src={"https://i.ibb.co/YQ9hLch/banner1.jpg"}
              className="w-100 h-100 object-fit-cover"
              alt=""
            />
            <figcaption className="position-absolute z-3 text-white w-100 h-100 text-center d-flex justify-content-center align-items-center">
              <h2>
                BERSAMA MELESTARIKAN <br /> BUDAYA INDONESIA
              </h2>
            </figcaption>
          </figure>
        </div>
        <div className="carousel-home">
          <figure className="position-relative d-flex align-items-center justify-content-center  h-100">
            <img
              src={"https://i.ibb.co/LR72M7D/banner2.jpg"}
              className="w-100 h-100 object-fit-cover"
              alt=""
            />
            <figcaption className="position-absolute z-3 text-white w-100 h-100 text-center d-flex justify-content-center align-items-center">
              <h2>
                EXPLORE THE <br /> INDONESIA
              </h2>
            </figcaption>
          </figure>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselHome;
