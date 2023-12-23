import React, { useState } from "react";
import PrimaryButton from "../button";
import baseColors from "../../constant";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiMenu } from "react-icons/fi";
import PackageModal from "../package-model";
import BookModal from "../book-modal";

export default function AppHeader() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="lg:container lg:mx-auto px-8 py-3">
        <div className="lg:grid grid-cols-6 gap-3">
          <div className="w-full lg:w-30 lg:pr-4 relative flex justify-between  items-center">
            <a className="Poppins font-bold text-4xl">logo</a>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 rounded block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu color={baseColors.blackColor} size={24} />
            </button>
          </div>
          <div className="col-span-2 lg:col-span-5">
            <div
              className={
                "lg:flex flex-grow items-center lg:ps-4" +
                (navbarOpen ? "justify-items-stretch" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row lg:grow lg:justify-between list-none lg:w-70 items-center ">
                <li className="nav-item ">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">Home</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">Services</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">FAQ</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-twitter text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">Pricing/Packages</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="Roboto-Slab hover:opacity-75">
                    <i className="fab fa-pinterest text-lg leading-lg text-black opacity-75"></i>
                    <span className="ml-2 text-1xl">Contact</span>
                  </a>
                </li>
                <li className="nav-item hidden md:block">
                  <PrimaryButton
                    background={baseColors.blackColor}
                    color={baseColors.white}
                    title="Start Live Chat"
                    icon={
                      <HiOutlineChatBubbleLeftRight
                        color={baseColors.white}
                        size={18}
                      />
                    }
                  />
                </li>
                <li className="nav-item">
                  <BookModal title="Book Demo" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
