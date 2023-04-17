import React from "react";

const CustomerBadge = ({ data }) => (
  <div className="border-2 border-gray-200 lg:p-4 m-2 rounded-lg hover:scale-[1.05] transition">
    <a target="_black" href={data.link}>
      <img src={data.image} className="w-44 h-36 object-contain mb-6" />
      <p className="text-center font-bold text-blue-500 text-wrap">
        {data.title}
      </p>
    </a>
  </div>
);

export default CustomerBadge;
