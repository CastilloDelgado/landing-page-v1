import React from "react";
import ProjectBadge from "./ProjectBadge";

const ProjectsList = ({ projects }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
    {projects.map((project) => (
      <ProjectBadge project={project} />
    ))}
  </div>
);

export default ProjectsList;
