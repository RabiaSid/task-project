import React from "react";
import { Design1, Design2, Design3, Design4 } from "../../assets";
import baseColors from "../../constant";

export default function HomeSectionThree() {
  return (
    <>
      <div className="container mx-auto py-8 px-2 my-5">
        <div className="flex flex-col justify-center items-center pt-8 ">
          <div className="md:w-3/4  text-center">
            <h1
              className="text-5xl sm:text-7xl Poppins text-center"
              style={{ lineHeight: 1.2 }}
            >
              We Design More Than Just A Logo
            </h1>
            <p
              className="Roboto-Slab  text-center py-4"
              style={{ color: baseColors.secondaryColor }}
            >
              We are committed towards providing professional logo designs
              tailored to your brand’s culture, core values & distinction. We
              take a strategic approach to creating unique brand identities
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-10 gap-x-8 items-center  justify-between ">
        <div className="md:col-start-2 md:col-end-5 my-2 md:my-auto mx-5 px-5 justify-around  items-center ">
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="col-span-2 font-medium  text-1xl md:text-3xl Poppins">
              BRAND DISCOVERY
            </div>
            <div>
              <img src={Design1} style={{ height: "16vh" }} />
            </div>
            <div className="col-span-3">
              <h3 className="text-justify text-sm">
                Before we design a logo, we understand your business niche. This
                process lets our team do intensive research on your specific
                industry, target audience, and competitors.
              </h3>
            </div>
          </div>
        </div>
        <div className="md:col-end-9 md:col-span-3 my-2 md:my-auto md:mt-[180px] mx-5 px-5 justify-around  items-center ">
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="col-span-2 font-medium text-1xl md:text-3xl Poppins">
              LOGO DESIGN
            </div>
            <div>
              <img src={Design2} style={{ height: "16vh" }} />
            </div>
            <div className="col-span-3">
              <h3 className="text-justify text-sm">
                Customize your design with our in-house highly experienced and
                creative team. They never cut corners, and always go above and
                beyond to give our clients a truly personalized logo.
              </h3>
            </div>
          </div>
        </div>
        <div className="md:col-start-3 md:col-end-6 md:mb-[180px] my-2 md:my-auto  mx-5 px-5 justify-around  items-center ">
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="col-span-2 font-medium text-1xl md:text-3xl Poppins">
              BRAND GUIDELINES
            </div>
            <div>
              <img src={Design3} style={{ height: "16vh" }} />
            </div>
            <div className="col-span-3">
              <h3 className="text-justify text-sm">
                Brand guidelines are clearly defined rules and standards that
                communicate how your brand should be represented to the world.
                Brand guidelines help businesses ensure consistency and
                demonstrate what the company is, what it does, and what it
                stands for.
              </h3>
            </div>
          </div>
        </div>
        <div className="md:col-end-10 md:col-span-3 my-2 md:my-auto mx-5 px-5 justify-around  items-center ">
          <div className="grid grid-cols-3 justify-center items-center">
            <div className="col-span-2 font-medium text-1xl md:text-3xl Poppins">
              MARKETING COLLATERALS
            </div>
            <div>
              <img src={Design4} style={{ height: "16vh" }} />
            </div>
            <div className="col-span-3">
              <h3 className="text-justify text-sm">
                Once you have a logo designed by us, you’ll want to update your
                marketing collateral. Whether it’s business cards, letterhead,
                or signage, we have you covered. Anything you can use to
                communicate your company's brand message is considered marketing
                collateral.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
