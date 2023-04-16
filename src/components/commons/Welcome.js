import React from "react";
import image from "../../assets/17.jpg";
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
      <div className="flex flex-col md:flex-row bg-white">
        <div className="wfull md:w-2/5  px-10 py-12 text-center flex items-center bg-blue-100">
          <div className="h-fit ">
            <p className="text-2xl lg:text-4xl font-bold text-blue-800 mb-2 lg:mb-8">
              Termo Aislantes Y Derivados S.A de C.V
            </p>
            <p className="text-lg lg:text-2xl mb-6 lg:mb-12 ">
              Expertos con más de 20 años de experiencia en el aislamiento
              térmico.
            </p>
            <Button />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <img src={image} />
        </div>
      </div>
    </Transition>
  );
};

export default Welcome;
