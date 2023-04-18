import React from "react";
import { companyInfo } from "../../constants";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid";

const Footer = () => (
  <div className="bg-primary-900 py-6  text-gray-300 border-t-8 border-primary-500 w-full flex px-6 md:justify-center">
    <div className="flex flex-col md:flex-row lg:w-1/2 ">
      <div className="mb-2 lg:w-1/2">
        <div className="text-sm flex mb-2">
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
          <p className="mr-1 text-left text-wrap md:w-80 flex flex-wrap">
            {companyInfo.address}
          </p>
        </div>
      </div>
      <div className="text-xs lg:w-1/2">
        <div className="flex lg:justify-end">
          <p className="mr-1">Página creada por:</p>
          <p className="font-bold">Marco Castillo</p>
        </div>
        <div className="flex lg:justify-end">
          <p className="mr-1">Contacto:</p>
          <p className="font-bold">marcocastillo1997@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
