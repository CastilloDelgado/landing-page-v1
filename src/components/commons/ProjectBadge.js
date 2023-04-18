import React from "react";
import ImagesList from "./ImagesList";
import {
  ClockIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const ProjectBadge = ({ project }) => (
  <div
    className={`${project.textColor} ${project.backgroundColor} ${project.borderColor} px-4 py-6 border-4  mb-4`}
  >
    <p className="text-center text-2xl font-bold mr-2 mb-6">{project.title}</p>

    <div className="flex text-sm">
      <UserCircleIcon className="w-5 h-5 mr-2" />
      <p className="font-bold mr-2">Cliente:</p>
      <p>{project.customer}</p>
    </div>
    <div className="flex text-sm">
      <MapPinIcon className="w-5 h-5 mr-2" />
      <p className="font-bold mr-2">Ubicación:</p>
      <p>{project.location}</p>
    </div>
    <div className="flex text-sm mb-6">
      <ClockIcon className="w-5 h-5 mr-2" />
      <p className="font-bold mr-2">Duración:</p>
      <p>{project.duration}</p>
    </div>
    <div className="mb-6">
      <p className="font-bold mr-2">Descripción del proyecto:</p>
      <p className="text-justify">{project.description}</p>
    </div>
    <div className="">
      <p className="font-bold mb-4 text-center">Imagenes del proyecto</p>

      <ImagesList images={project.images} />
    </div>
  </div>
);

export default ProjectBadge;
