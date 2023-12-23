import React from "react";
import { brands1, brands2, brands3, salePrice } from "../../assets";
import baseColors from "../../constant";
import PrimaryButton from "../../component/button";
import SearchField from "../../component/Search-field";

export default function HomeSectionOne() {
  return (
    <div className="md:container md:mx-auto py-6 my-5">
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 items-stretch">
        <div className="p-5 col-span-4 lg:col-span-3 self-center">
          <h2 className="Roboto-Slab font-medium">
            Payments tool for companies
          </h2>
          <h1
            className="text-5xl sm:text-7xl Poppins py-6 md:py-1"
            style={{ lineHeight: 1.2, color: baseColors.secondaryColor }}
          >
            Our CUSTOM LOGO DESIGNS SERVICES
          </h1>
          <p
            className="Roboto-Slab"
            style={{ color: baseColors.secondaryColor }}
          >
            we don't design logos only - we transform brand identities through
            our creatively crafted premium logo designs.
          </p>

          <div className="flex flex-row py-2">
            <img src={brands1} style={{ maxWidth: "25vw" }} />
            <img src={brands2} style={{ maxWidth: "25vw" }} />
            <img src={brands3} style={{ maxWidth: "25vw" }} />
          </div>
          <p
            className="Roboto-Slab text-2xl py-4"
            style={{ color: baseColors.secondaryColor }}
          >
            Fill The Form To Avail 70% Off
          </p>
          <div className="hidden md:block">
            <div className="flex flex-row py-2 ">
              <SearchField placeholder="Enter Your Email" />
              <PrimaryButton
                title="search"
                background={baseColors.primaryColor}
                color={baseColors.white}
              />
            </div>
          </div>
        </div>
        <div className="pt-5 hidden  sm:block">
          <img src={salePrice} style={{ height: "27vh" }} />
        </div>
        <div className="background-image-1 col-span-2 hidden lg:block"></div>
      </div>
    </div>
  );
}
