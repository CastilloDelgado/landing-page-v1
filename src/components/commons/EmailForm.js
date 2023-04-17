import React from "react";
import Button from "./Button";

const EmailForm = () => (
  <div>
    <div>
      <form>
        <p className="text-lg font-bold mb-2 text-amber-900">
          Envianos un correo electrónico
        </p>
        <p className="text-justify mb-4">
          Contactanos por medio de correo electrónico, comentanos detalles sobre
          tu proyecto y/o dudas sobre nuestros servicios y te contestaremos a la
          brevedad.
        </p>
        <p className="font-bold mb-1">Tu correo electrónico</p>
        <input
          type="email"
          className="border-b-2 px-2 py-1 border-b-amber-500 w-64 mb-4"
          required
        />
        <p className="font-bold mb-1">Escribe tu correo</p>
        <textarea
          type="text"
          rows={6}
          className="border-b-2 px-2 py-1 border-b-amber-500 w-full mb-4"
          required
        />
        <div className="w-full flex justify-end">
          <Button title="Enviar correo" color="bg-amber-700" />
        </div>
      </form>
    </div>
  </div>
);

export default EmailForm;
