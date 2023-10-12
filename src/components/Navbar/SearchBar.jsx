import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

const SearchBar = ({ onClose }) => {
  return (
    <>
      <div className="search__area">
        <div className="search__area--bar">
          <div className="search__area--bar__input">
            <FiSearch className="text-[#62696F]" />
            <input
              className="search__area--input"
              type="text"
              placeholder="Search.."
            />
          </div>
          <button onClick={onClose} className="search__area--cross text-xs ">
            <RxCross2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
