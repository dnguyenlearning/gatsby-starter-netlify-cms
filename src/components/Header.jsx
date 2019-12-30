import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import lightBulbGIF from "../img/light_bulb.gif";

const Header = ({ siteTitle }) => {

  return <header
    className="pb-3 sm:pb-0 my-5 max-w-full sm:max-w-2xl mx-auto md:max-w-4xl lg:max-w-6xl flex flex-col sm:flex-row items-center bg-white text-grey-40 w-screen shadow-sm border-b-2 border-gray-200"
  > 
    <div className="w-24 h-24 sm:w-48 sm:h-48 flex justify-center items-center mb-5">
      <Link to="/">
        <img className="max-h-full" src={lightBulbGIF} alt="gif"/>
      </Link>
    </div>
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="text-xl md:text-3xl text-center sm:text-left">
        // Tất cả thông tin về công ty tech tại <span className="font-bold text-black">Việt Nam //</span>
      </div>
    </div>
  </header>
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
