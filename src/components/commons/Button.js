import React from "react";

const Button = ({ title, color = "bg-primary-500" }) => (
  <button
    className={`${color} px-3 py-1 rounded-md text-white hover:scale-[1.05] transition  `}
  >
    {title}
  </button>
);

export default Button;
