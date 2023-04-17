import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { Menu } from "@headlessui/react";

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
        <Link to="/">
          <p className="text-xl font-bold">Company Logo</p>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex flex-col md:flex-row">
          {links.map((link) => (
            <NavbarLink linkData={link} currentLocation={location.pathname} />
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <Menu>
          <Menu.Button>Opciones</Menu.Button>
          <Menu.Items className="absolute flex flex-wrap w-32 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-blue-900">
            {links.map((link) => (
              <Menu.Item className="w-full">
                {() => (
                  <a className="w-full">
                    <Link to={link.path} className="w-full">
                      <button className="flex w-full items-center px-2 py-1 bg-blue-600 border-b-2 border-gray-300">
                        {link.title}
                      </button>
                    </Link>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
