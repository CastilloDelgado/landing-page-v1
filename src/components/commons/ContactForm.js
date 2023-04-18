import React from "react";
import EmailForm from "./EmailForm";

const ContactForm = () => (
  <div className="bg-white flex flex-col md:flex-row w-full">
    <div className="w-full py-8 px-6 ">
      <p>¡Contactanos!</p>
    </div>
    <div className="w-full bg-secondary-50 py-8 px-6 border-l-8 border-secondary-300">
      <EmailForm />
    </div>
  </div>
);

export default ContactForm;
