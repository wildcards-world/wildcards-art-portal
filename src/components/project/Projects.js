import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import ProjectContext from "../../context/projects/projectContext";

const Projects = () => {
  const projectContext = useContext(ProjectContext);

  const { episodes } = projectContext;

  return (
    <div style={userStyle}>
      {episodes.map(episode => (
        <ProjectItem key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default Projects;
