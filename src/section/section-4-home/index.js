import React from "react";
import baseColors from "../../constant";
import PricingCard from "../../component/card/package-card";
import { PackageDetail } from "../../config/local-data";

export default function HomeSectionFour() {
  return (
    <>
      <div className="md:container md:mx-auto py-8 mb-8">
        <div className="flex flex-col justify-center items-center py-8 ">
          <div className=" w-full md:w-3/4 lg:w-3/5 xl:w-1/3  text-center">
            <p
              className="text-5xl sm:text-7xl Poppins"
              style={{ lineHeight: 1.2 }}
            >
              Our Affordable{" "}
              <span
                style={{
                  color: baseColors.primaryColor,
                }}
              >
                Pricing
              </span>{" "}
              Plans
            </p>
            <p
              className="Roboto-Slab py-3"
              style={{ color: baseColors.secondaryColor }}
            >
              Tailor-made Packages To Fulfill Your Business Needs
            </p>
          </div>
        </div>
        <div className="lg:container lg:mx-auto px-8 py-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3">
            {PackageDetail.map((x) => (
              <PricingCard
                key={x.value}
                packageName={x.packageName}
                beforeprice={x.beforePrice}
                afterprice={x.afterPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
