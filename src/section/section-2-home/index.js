import React, { useState } from "react";
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
} from "../../assets";
import baseColors from "../../constant";
import { images } from "../../config/local-data";
import PrimaryModal from "../../component/modal";
import FancyBox from "../../component/fancy-box";

export default function HomeSectionTwo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto py-8 px-2 my-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-x">
          <div className="flex flex-col justify-center items-center ">
            <img src={portfolio1} style={{ height: "24vh" }} />
            <h3 className="text-center">100% original Design</h3>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img src={portfolio2} style={{ height: "24vh" }} />
            <h3 className="text-center">360 Design Consultancy</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={portfolio3} style={{ height: "24vh" }} />
            <h3 className="text-center">Complete Custumer Satisfaction</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={portfolio4} style={{ height: "24vh" }} />
            <h3 className="text-center">100% Money-Back Guarantee</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={portfolio5} style={{ height: "24vh" }} />
            <h3 className="text-center">market Recognized Designs</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-8 my-8">
        <h1
          className="text-5xl sm:text-7xl Poppins text-center"
          style={{ lineHeight: 1.2 }}
        >
          Masterworks We Have Created
        </h1>
        <p
          className="Roboto-Slab  text-center"
          style={{ color: baseColors.secondaryColor }}
        >
          Get a sneak peek at some of the work we have done for our clients
          across the Earth.
        </p>
      </div>
      <div className="lg:container lg:mx-auto px-8 py-3">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
          onClick={handleOpenModal}
        >
          {images.map((x) => (
            <>
              <div key={x.id}>
                <img
                  src={x.imageName}
                  style={{ height: "48vh", width: "100%" }}
                />
              </div>
            </>
          ))}
          <div></div>
        </div>
      </div>
      <PrimaryModal open={isModalOpen} close={handleCloseModal}>
        <FancyBox />
      </PrimaryModal>
    </>
  );
}
