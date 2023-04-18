import React from "react";
import image from "../../assets/projects/17.jpg";
import { Transition } from "@headlessui/react";
import Button from "./Button";

const Welcome = () => {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transform transition duration-[600ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex flex-col md:flex-row bg-white min-h-full bg-secondary-50 border-b-8 border-secondary-400">
        <div className="w-full md:w-2/5 px-10 py-12 text-center flex items-center ">
          <div className="h-fit ">
            <p className="text-2xl lg:text-4xl font-bold text-secondary-900 mb-2 lg:mb-12">
              Termo Aislantes Y Derivados S.A de C.V
            </p>

            <p className="mb-6 lg:mb-6 text-secondary-700 ">
              En esta página encontrarás ultimos proyectos para diferentes
              clientes con los que nos han entrado su confianza durante más de
              23 años.
            </p>
            <div className="flex flex-wrap justify-center">
              <div className="mx-1 mb-2">
                <Button title="Contacto" color="bg-secondary-700" />
              </div>
              <div className="mx-1 mb-2">
                <Button title="Servicios" color="bg-secondary-600" />
              </div>
              <div className="mx-1 mb-2">
                <Button title="Proyectos" color="bg-secondary-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <img
            src={image}
            alt="Imagen de proyecto de instalación de aislamiento térmico en tuberias"
          />
        </div>
      </div>
    </Transition>
  );
};

export default Welcome;
