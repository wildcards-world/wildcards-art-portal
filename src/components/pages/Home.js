import React, { useContext, useEffect } from "react";
import Projects from "../project/Projects.js";
import ProjectContext from "../../context/projects/projectContext";

const Home = () => {
  const projectContext = useContext(ProjectContext);
  const { getEpisodes } = projectContext;
  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <div className="text-center">
      <h3>Projects keeping me busy</h3>
      <Projects />
    </div>
  );
};
export default Home;
