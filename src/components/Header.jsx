import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import lightBulbGIF from "../img/light_bulb.gif";

const Header = ({ siteTitle }) => {
  const filters = [
    { id: 1, field: '>3000$', icon: '💰' },
    { id: 2, field: 'Mac', icon: '🍎' },
    { id: 3, field: 'Ho Chi Minh', icon: '🏙' },
    { id: 4, field: 'Ha Noi', icon: '🙉' },
    { id: 14, field: 'San Pham', icon: '📦' },
    { id: 12, field: 'Out Source', icon: '📄' },
    { id: 5, field: '<2000$', icon: '🤑' },
    { id: 6, field: 'Senior', icon: '💻' },
    { id: 7, field: 'Fresher', icon: '🤹' },
    { id: 8, field: 'Junior', icon: '🇹🇫' },
  ]
  
  return <header
    className="pb-3 sm:pb-0 my-5 max-w-full sm:max-w-2xl mx-auto md:max-w-4xl lg:max-w-6xl flex flex-col sm:flex-row items-center bg-white text-grey-40 w-screen shadow-sm border-b-2 border-gray-200"
  > 
    <div className="w-24 h-24 sm:w-48 sm:h-48 flex justify-center items-center mb-5">
      <Link to="/">
        <img className="max-h-full" src={lightBulbGIF} alt="gif"/>
      </Link>
    </div>
    <div className="flex flex-col w-11/12 mx-auto">
      <div className="text-gray-600 text-xl text-center sm:text-left">
        // Tất cả thông tin về công ty tech tại <span className="font-bold text-black">Việt Nam // 😺</span>
      </div>
      <div className='flex flex-row rounded-lg mt-2'>
            <div className="flex flex-wrap justify-center sm:justify-start">
              {filters.map(item => {
                return <span key={item.id} className="flex-shrink-0 hover:bg-gray-500 m-1 cursor-pointer flex rounded-sm bg-gray-300 text-black capitalize px-2 py-1 text-xs font-bold mr-3">{item.icon} {item.field}</span>
              })}
            </div>
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
