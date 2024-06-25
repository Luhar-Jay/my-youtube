import React, { useEffect, useState } from "react";
import { MENU_BAR, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheSearch } from "../utils/searchSlice";

const Header = () => {
  // debouncing of youtube search
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggetion, setSearchSuggetion] = useState([]);
  const [showSuggetion, setShowSuggetion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggetion(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();

    setSearchSuggetion(json[1]);

    dispatch(
      cacheSearch({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSearchClick = () => {
    setShowSuggetion(showSuggetion);
  };

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
        <div>
          <input
            className="w-1/2 px-5 border border-gray-400 p-2 rounded-s-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggetion(true)}
            onBlur={() => setShowSuggetion(false)}
            onClick={handleSearchClick}
          />
          <button className="border border-gray-400 bg-gray-100 p-2 rounded-e-full px-5">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggetion && (
          <div className="absolute bg-white md:ml-[350px] w-[46rem] px-2 py-2 rounded-lg border border-gray-200 shadow-lg pl-0 text-start  ">
            <ul className="">
              {searchSuggetion.map((s) => (
                <li key={s} className=" py-2 shadow hover:bg-gray-200">
                  <i className="fa-solid fa-magnifying-glass px-2 "></i>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
