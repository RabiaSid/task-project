import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { images } from "../../config/local-data";

function FancyBox() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="p-2">
        <Slider {...settings}>
          {images.map((x) => {
            return (
              <img
                src={x.imageName}
                style={{ height: "48vh", width: "100%" }}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default FancyBox;
