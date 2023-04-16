import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink";

const links = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/nosotros",
    title: "Nosotros",
  },
  {
    path: "/proyectos",
    title: "Proyectos",
  },
  {
    path: "/galeria",
    title: "Galería",
  },
  {
    path: "/contacto",
    title: "Contacto",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="bg-blue-500 text-white flex justify-between px-4 py-3">
      <div>
        <p className="text-xl font-bold">Company Logo</p>
      </div>
      <ul className="flex flex-col md:flex-row">
        {links.map((link) => (
          <NavbarLink linkData={link} currentLocation={location.pathname} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
