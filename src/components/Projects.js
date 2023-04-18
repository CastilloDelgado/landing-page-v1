import React from "react";
import Layout from "./commons/Layout";
import ProjectsList from "./commons/ProjectsList";
import image_1 from "../assets/projects/1.jpg";
import image_2 from "../assets/projects/2.jpg";
import image_3 from "../assets/projects/3.jpg";
import image_4 from "../assets/projects/4.jpg";
import image_5 from "../assets/projects/5.jpg";
import image_6 from "../assets/projects/6.jpg";

const projects = [
  {
    borderColor: "border-primary-300",
    backgroundColor: "bg-primary-50",
    textColor: "text-primary-900",
    title: "Proyecto Número 1",
    customer: "Grupo Nestlé México",
    location: "Ocotlán, Jalisco, México",
    duration: "3 meses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      { source: image_1, alt: "Imagen Número 1" },
      { source: image_2, alt: "Imagen Número 2" },
      { source: image_3, alt: "Imagen Número 3" },
      { source: image_3, alt: "Imagen Número 3" },
    ],
  },
  {
    borderColor: "border-secondary-500",
    backgroundColor: "bg-secondary-50",
    textColor: "text-secondary-900",
    color: "secondary",
    title: "Proyecto Número 2",
    customer: "Grupo Nestlé México",
    location: "Ocotlán, Jalisco, México",
    duration: "3 meses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      { source: image_4, alt: "Imagen Número 1" },
      { source: image_5, alt: "Imagen Número 2" },
      { source: image_6, alt: "Imagen Número 3" },
      { source: image_6, alt: "Imagen Número 3" },
    ],
  },
  {
    borderColor: "border-tertiary-300",
    backgroundColor: "bg-tertiary-50",
    textColor: "text-tertiary-900",
    title: "Proyecto Número 3",
    customer: "Grupo Nestlé México",
    location: "Ocotlán, Jalisco, México",
    duration: "3 meses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      { source: image_4, alt: "Imagen Número 1" },
      { source: image_5, alt: "Imagen Número 2" },
      { source: image_6, alt: "Imagen Número 3" },
      { source: image_6, alt: "Imagen Número 3" },
    ],
  },
  {
    borderColor: "border-primary-300",
    backgroundColor: "bg-primary-50",
    textColor: "text-primary-900",
    title: "Proyecto Número 1",
    title: "Proyecto Número 4",
    customer: "Grupo Nestlé México",
    location: "Ocotlán, Jalisco, México",
    duration: "3 meses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    images: [
      { source: image_4, alt: "Imagen Número 1" },
      { source: image_5, alt: "Imagen Número 2" },
      { source: image_6, alt: "Imagen Número 3" },
      { source: image_6, alt: "Imagen Número 3" },
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      <div>
        <div className="w-full flex justify-center bg-primary-50 border-b-8 border-primary-300 py-8">
          <div className="text-center w-full md:w-1/2 px-8">
            <p className="text-primary-900 font-bold text-3xl mb-6">
              Nuestros Proyectos
            </p>
            <p className="text-primary-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="py-4">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
