import React from "react";
import InfoBadge from "./InfoBadge";

const cards = [
  {
    title: "Misión",
    description:
      "Ofrecer a nuestros clientes un servicio integral a través de la calidad total respetando las normas de seguridad e higiene industrial y cuidados del medio ambiente.",
  },
  {
    title: "Visión",
    description:
      "Consolidarnos como una empresa competitica en costos y calidad en áreas de comercialización y servicios de mantenimiento.",
  },
  {
    title: "Política",
    description:
      "Mantener costos competitivos formando alianzas de trabajo directamente con fabricantes de productos industrales, reflejando en ello los beneficios de costo de calidad y servicios a nuestros clientes.",
  },
];

const OurValues = () => (
  <div className="py-8 bg-white border-b-8 border-gray-300">
    <div className="w-full flex justify-center mb-2">
      <div className="w-1/2">
        <p className="text-center text-2xl font-bold text-primary-700 pb-2">
          Nuestro valores y principios
        </p>
        <p className="text-center text-primary-900 pb-8">
          Estos son los pilares en los que nos hemos basado para construir una
          empresa con más de 20 años de experiencia profesional el área.
        </p>
      </div>
    </div>
    <div className="w-full flex flex-row justify-cente px-4">
      <div className="w-full flex-row flex text-center flex-wrap justify-center">
        {cards.map((card) => (
          <InfoBadge data={card} />
        ))}
      </div>
    </div>
  </div>
);

export default OurValues;
