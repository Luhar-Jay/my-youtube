import React from "react";
import { MENU_BAR, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className=" h-8 cursor-pointer"
          alt="menu"
          src={MENU_BAR}
          onClick={(dispatch) => toggleMenuHandler()}
        />
        <a href="/">
          <img className="h-8 mx-4" alt="youtube logo" src={YOUTUBE_LOGO} />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-s-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 bg-gray-100 p-2 rounded-e-full px-5">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
