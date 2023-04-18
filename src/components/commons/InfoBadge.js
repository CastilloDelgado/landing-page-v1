import React from "react";

const InfoBadge = ({ data }) => (
  <div className="text-center bg-secondary-50 mx-2 py-8 px-4 w-full sm:w-64 border-4 border-secondary-300 rounded-md mb-4 hover:scale-[1.05] transition">
    <p className="font-bold mb-4 text-2xl text-secondary-900">{data.title}</p>
    <p className="text-secondary-900">{data.description}</p>
  </div>
);

export default InfoBadge;
