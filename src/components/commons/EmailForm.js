import React from "react";
import Button from "./Button";
import { EnvelopeIcon } from "@heroicons/react/20/solid";

const EmailForm = () => (
  <div>
    <div>
      <form>
        <p className="text-lg font-bold mb-2 text-secondary-900 flex">
          <EnvelopeIcon className="w-7 h-7 mr-2 mb-4" />
          Envianos un correo electrónico
        </p>
        <p className="text-justify mb-4 text-secondary-900">
          Contactanos por medio de correo electrónico, comentanos detalles sobre
          tu proyecto y/o dudas sobre nuestros servicios y te contestaremos a la
          brevedad.
        </p>
        <p className="font-bold mb-1 text-secondary-900">
          Tu correo electrónico
        </p>
        <input
          type="email"
          className="border-b-4  border-secondary-500 px-2 py-1 w-64 mb-4"
          required
        />
        <p className="font-bold mb-1  text-secondary-900">Escribe tu correo</p>
        <textarea
          type="text"
          rows={6}
          className="border-b-4 border-secondary-500 px-2 py-1  w-full mb-4"
          required
        />
        <div className="w-full flex justify-end">
          <Button title="Enviar correo" color="bg-secondary-600" />
        </div>
      </form>
    </div>
  </div>
);

export default EmailForm;
