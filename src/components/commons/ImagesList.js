import React from "react";

const ImagesList = ({ images }) => (
  <div className="flex flex-row flex-wrap justify-around">
    {images.map((image) => (
      <img
        alt={image.alt}
        src={image.source}
        className="w-64 h-64 border-b-4 border-primary-500 mb-4"
      />
    ))}
  </div>
);

export default ImagesList;
