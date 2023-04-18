import React from "react";
import { companyInfo } from "../../constants";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid";

const Footer = () => (
  <div className="bg-primary-900 py-3 px-6 flex flex-wrap justify-around text-gray-300 border-t-8 border-primary-700">
    <div className="w-1/2 md:w-full flex flex-col md:flex-row">
      <div className="mb-2 w-full md:w-1/2">
        <div className=" text-sm flex mb-2 ">
          <p className="mr-1 font-bold">{companyInfo.name}</p>
        </div>
        <div className=" w-full text-sm flex text-xs">
          <PhoneIcon className="w-3 h-3 mr-2" />
          <p className="mr-1 font-bold">Número de contacto:</p>
          <p className="mr-1">{companyInfo.phone}</p>
        </div>
        <div className=" w-full text-sm flex text-xs">
          <EnvelopeIcon className="w-3 h-3 mr-2" />
          <p className="mr-1 font-bold">Correo electrónico:</p>
          <p className="mr-1">{companyInfo.email}</p>
        </div>
        <div className=" w-full text-sm flex text-xs">
          <MapIcon className="w-3 h-3 mr-2" />
          <p className="mr-1 font-bold">Domicilio:</p>
          <p className="mr-1 text-left w-80">{companyInfo.address}</p>
        </div>
      </div>
      <div className="w-1/2 text-xs">
        <div className=" w-full flex justify-end">
          <p className="mr-1">Página creada por:</p>
          <p className="font-bold">Marco Castillo</p>
        </div>
        <div className=" w-full  flex justify-end">
          <p className="mr-1">Contacto:</p>
          <p className="font-bold">marcocastillo1997@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
