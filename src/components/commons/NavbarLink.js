import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ linkData, currentLocation }) => {
  return (
    <li
      className={`${currentLocation === linkData.path && "font-bold underline"}
       ${currentLocation === linkData.path ? "text-white" : "text-gray-200"} 
      mr-3 hover:underline text-sm`}
    >
      <Link to={linkData.path}>{linkData.title}</Link>
    </li>
  );
};

export default NavbarLink;
