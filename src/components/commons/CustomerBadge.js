import React from "react";

const CustomerBadge = ({ data }) => (
  <div className="border-4 border-primary-100 bg-white p-2 lg:p-4 mx-2 mb-4 rounded-lg hover:scale-[1.05] transition">
    <a target="_black" href={data.link}>
      <img
        src={data.image}
        className="w-32 h-32 md:w-44 md:h-36 object-contain mb-6"
      />
      <p className=" font-bold text-primary-500 flex justify-center text-wrap">
        {data.title}
      </p>
    </a>
  </div>
);

export default CustomerBadge;
