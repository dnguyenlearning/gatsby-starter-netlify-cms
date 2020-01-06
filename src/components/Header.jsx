import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import IconSVG from "../img/congty_icon.svg";

const Header = ({ siteTitle }) => {

  return <div className="w-full border-b-2 border-gray-200 shadow-tech bg-white">
      <header
    className="px-2 lg:px-0 max-w-5xl mx-auto flex items-center justify-between"
  > 
  <div className="flex items-center">
      <div className="h-16 flex items-center">
        <Link to="/">
          <img className="h-12" src={IconSVG} alt="icon"/>
        </Link>
      </div>
      <div className="ml-2 lg:ml-4 flex flex-col w-11/12 mx-auto">
        <div className="lg:text-xl text-sm">
          // Tất cả thông tin về công ty tech tại <span className="font-bold text-black">Việt Nam //</span>
        </div>
      </div>
  </div>
  <div className="flex">
    <button className="hover:opacity-75 bg-red-500 text-white text-sm px-3 py-2">
      Sign In
    </button>
    <button className="hover:opacity-75 text-black ml-0 sm:ml-4 text-sm px-3 py-2 border border-gray-500">
      Sign Up
    </button>
  </div>
  </header>
    </div>
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
