import React from "react";
import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
  rectangle6,
  rectangle7,
  rectangle8,
  rectangle9,
} from "../../assets";
import baseColors from "../../constant";

export default function HomeSectionTwo() {
  return (
    <>
      <div className="container mx-auto py-8 px-2 my-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 divide-x  ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <img src={rectangle1} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle2} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle3} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle4} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle5} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle6} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle7} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle8} style={{ height: "48vh", width: "100%" }} />
          <img src={rectangle9} style={{ height: "48vh", width: "100%" }} />
        </div>
      </div>
    </>
  );
}
