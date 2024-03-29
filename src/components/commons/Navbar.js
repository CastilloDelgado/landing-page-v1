import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import { Menu } from "@headlessui/react";
import { companyInfo } from "../../constants";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/20/solid";

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
  // {
  //   path: "/galeria",
  //   title: "Galería",
  // },
  {
    path: "/contacto",
    title: "Contacto",
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="sticky top-0 bg-primary-500 text-white flex justify-between px-4 py-3 border-b-8 border-primary-800">
      <div>
        <Link to="/" className="flex">
          <img
            alt="Logo de la compañía"
            src={companyInfo.logoImage}
            className="w-8 h-8 mr-2"
          />
          <p className="text-xl font-bold capitalize">
            {companyInfo.shortName}
          </p>
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
          <Menu.Button>
            <div className="flex">
              <Bars3Icon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute flex flex-wrap w-32 right-0 mt-2 w-56 origin-top-right  rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none bg-primary-900">
            {links.map((link) => (
              <Menu.Item className="w-full">
                {() => (
                  <Link to={link.path} className="w-full">
                    <button className="flex w-full items-center px-2 py-1 bg-primary-600 border-b-2 border-gray-300">
                      {link.title}
                    </button>
                  </Link>
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
