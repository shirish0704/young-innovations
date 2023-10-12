import React, { useState } from "react";
import { Navbar, Dropdown } from "flowbite-react";
import { BiBookAlt } from "react-icons/bi";
import { BsLightningCharge } from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import SearchBar from "./SearchBar";

const NavigationBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchButton = () => {
    setShowSearchBar(true);
  };

  const handleCloseSearchBar = () => {
    setShowSearchBar(false);
  };
  return (
    <>
      <Navbar className="navbar bg-transparent text-white max-[767px]:w-full">
        <div className="navbar__logo ">
          <Navbar.Brand href="/">
            <img
              alt="Catelog Logo"
              className="mr-3 h-6 sm:h-9"
              src="/src/assets/images/logo.png"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold">
              Catalog
            </span>
          </Navbar.Brand>
        </div>
        <div className="navbar--toggle md:order-2 justify-end bg-transparent pt-2  ">
          <Navbar.Toggle
            className="text-white 
             hover:bg-transparent"
          />
        </div>
        <Navbar.Collapse className="pt-2 max-[767px]:absolute max-[767px]:top-[60px]  max-[767px]:w-[90%]  ">
          <div className="navbar--lists ml-[5px] flex gap-96 max-[1200px]:gap-64 max-[992px]:gap-56 max-[767px]:flex-col max-[767px]:gap-1">
            <div className="navbar--list__left flex gap-9 max-[767px]:gap-1">
              <Navbar.Link
                className="text-white border-y-transparent hover:bg-opacity-20 m"
                href="#"
              >
                Home
              </Navbar.Link>
              <Navbar.Link
                className="text-white border-y-transparent hover:bg-opacity-20"
                href="#about"
              >
                About Us
              </Navbar.Link>
              <Navbar.Link
                className="text-white border-y-transparent hover:bg-opacity-20"
                href="#news"
              >
                Case Studies
              </Navbar.Link>
              <Navbar.Link
                className="text-white border-y-transparent hover:bg-opacity-20 max-[767px]:relative"
                href="#"
              >
                <Dropdown inline label="Resorces" className="p-5 ">
                  <div className="dropdown-heading flex gap-5 pb-6">
                    <div className="dropdown-heading-left text-2xl">
                      <BiBookAlt />
                    </div>
                    <div className="dropdown-heading-right">
                      <a href="#news">
                        <h1 className="text-gray-900 font-semibold text-md">
                          Blog
                        </h1>
                        <p className="text-gray-400 text-xs font-normal">
                          The latest industry news, updates and info.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-heading flex gap-5 pb-6">
                    <div className="dropdown-heading-left text-2xl">
                      <BsLightningCharge />
                    </div>
                    <div className="dropdown-heading-right">
                      <a href="#news">
                        <h1 className="text-gray-900 font-semibold text-md">
                          Customer Stories
                        </h1>
                        <p className="text-gray-400 text-xs font-normal">
                          Learn how our customers are making big changes.
                        </p>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown-heading flex gap-5">
                    <div className="dropdown-heading-left text-2xl">
                      <AiOutlinePlayCircle />
                    </div>
                    <div className="dropdown-heading-right">
                      <h1 className="text-gray-900 font-semibold text-md">
                        Video Tutorials
                      </h1>
                      <p className="text-gray-400 text-xs font-normal">
                        Get up and running on new features and techniques.
                      </p>
                    </div>
                  </div>
                </Dropdown>
              </Navbar.Link>
            </div>
            <div
              onClick={handleSearchButton}
              className="navbar__search pt-1 text-[16px] cursor-pointer"
            >
              <FiSearch />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {showSearchBar && <SearchBar onClose={handleCloseSearchBar} />}
    </>
  );
};

export default NavigationBar;
