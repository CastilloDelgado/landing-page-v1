import React from "react";
import image_1 from "../../assets/projects/1.jpg";
import image_2 from "../../assets/projects/2.jpg";
import image_3 from "../../assets/projects/3.jpg";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

const carouselItems = [
  {
    source: image_1,
    alt: "Proyecto de instalación de aislante térmico en tuberias",
  },
  {
    source: image_2,
    alt: "Proyecto de instalación de aislante térmico en tuberias",
  },
  {
    source: image_3,
    alt: "Proyecto de instalación de aislante térmico en tuberias",
  },
];

const WelcomeCarousel = () => (
  <CCarousel controls>
    {carouselItems.map((item) => (
      <CCarouselItem>
        <CImage className="d-block w-100" src={item.source} alt={item.alt} />
      </CCarouselItem>
    ))}
  </CCarousel>
);

export default WelcomeCarousel;
