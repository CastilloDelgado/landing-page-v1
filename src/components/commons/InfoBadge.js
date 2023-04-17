import React from "react";

const InfoBadge = ({ data }) => (
  <div className="text-center bg-amber-100 mx-2 py-8 px-4 w-full sm:w-64 border-4 border-amber-300 rounded-md mb-4 hover:scale-[1.05] transition">
    <p className="font-bold mb-4">{data.title}</p>
    <p className="">{data.description}</p>
  </div>
);

export default InfoBadge;
