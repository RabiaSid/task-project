import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import baseColors from "../../../constant";
import PackageModal from "../../package-model";

export default function PricingCard({ packageName, beforeprice, afterprice }) {
  return (
    <div
      className="flex flex-col justify-center items-center sm:mx-8"
      style={{
        background: "#f2f2f2",
      }}
    >
      <div
        className="flex w-full justify-center items-center py-4"
        style={{ backgroundColor: baseColors.primaryColor }}
      >
        <p
          className="text-3xl md:text-5xl Poppins"
          style={{ color: baseColors.white }}
        >
          {packageName}
        </p>
      </div>
      <div className="grid grid-cols-2 h-24 items-stretch py-3">
        <div className="self-center p-2">
          <span className="text-5xl Poppins">{afterprice}</span>
        </div>
        <div className="self-start p-2">
          <span className="text-2xl line-through"> {beforeprice}</span>
        </div>
      </div>
      <ul role="list" className="space-y-5 my-2">
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">3 Custom Logo Design Concept</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">1 Dedicated Designer</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">4 Revisions</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">48 to 72 hours TAT</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">100% Unique Design Guarantee</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">100% Satisfaction Guarantee</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle size={16} />
          <span className="Roboto-Slab ms-4">100% Money Back Guarantee</span>
        </li>
      </ul>
      <div className="py-5">
        <PackageModal title="Select Package" />
      </div>

      <div
        className="w-full justify-start items-center p-3"
        style={{ backgroundColor: baseColors.mediumGrey }}
      >
        <p
          className="text-2xl Roboto-Slab"
          style={{ color: baseColors.secondaryColor }}
        >
          LET'S TALK
        </p>
        <p
          className="Roboto-Slab text-base"
          style={{ color: baseColors.secondaryColor }}
        >
          Let us know how we can assist you with your business goals. Let’s sort
          them out together
        </p>
      </div>
    </div>
  );
}
