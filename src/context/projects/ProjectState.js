import React, { useReducer } from "react";
import ProjectContext from "./projectContext";
import ProjectReducer from "./projectReducer";
import { GET_EPISODES, GET_EPISODE } from "../types";

const ProjectState = props => {
  const initialState = {
    episodes: [
      {
        list_id: 0,
        name: "Lima Capital",
        role: "CTO",
        avatar_url: "/assets/images/Lima-logo.png",
        html_url: "https://lima.capital",
        location: "Cape Town",
        active: true,
        company_bio: "Machine learning investment management firm",
        bio:
          "Management of multiple technical moving parts. Building and maintaining python frameworks used to facilitate exposure to equity indices. Cloud infrfastructure, web development. General strategy and technical writing. "
      },
      {
        list_id: 1,
        name: "Stackr",
        role: "Head of Technology",
        avatar_url: "/assets/images/stackr1.png",
        html_url: "https://www.gostackr.com",
        active: true,
        company_bio: "Global savings solution",
        bio:
          "General technological roadmap arcitecture and planning. Built using React + Node.js + GraphQL   "
      },
      {
        list_id: 2,
        name: "Wildcards",
        role: "Co-founder",
        avatar_url: "/assets/images/wildcards.png",
        html_url: "https://wildcards.world",
        active: true,
        company_bio: "Always for sale digital conservation tokens",
        bio:
          "Actively involved in strategy, full stack development and business development. Wildcards is the first project of its kind combining the incentives of profit, patronage and collectibles to fund the commons."
      },
      {
        list_id: 3,
        name: "Where it started",
        role: "Host",
        avatar_url: "/assets/images/podcast.png",
        html_url: "https://whereitstarted.io",
        active: true,
        company_bio:
          "Tech foccussed podcast talking to founders and asking where it started...",
        bio:
          "Where it started is all about chatting to individuals who are pioneering change. We catch up with founders and ask about their journey is starting their respective projects."
      },
      {
        list_id: 4,
        name: "Always for sale",
        role: "Co-founder",
        avatar_url: "/assets/images/ethindia.png",
        html_url: "https://alwaysforsale.io",
        active: true,
        company_bio: "Always for sale advertising space",
        bio:
          "Allows any user to simply intergrate advertising space into their website and recieve income in minutes. "
      },
      {
        list_id: 5,
        name: "University of Cape Town",
        role: "Lecturer in Computer Science",
        avatar_url: "/assets/images/uctlogo.png",
        //html_url: "https://www.cs.uct.ac.za/",
        active: true,
        company_bio: "Lecturer in Computer Science",
        bio:
          "Lectured advanced software engineering to 3rd year students. Lectured python to 1st year computer science students. "
      },
      {
        list_id: 6,
        name: "WorldQuant University",
        role: "Lecturer & Content creator",
        avatar_url: "/assets/images/wqu.png",
        html_url: "https://wqu.org",
        active: null,
        company_bio: "Offering a Msc in Financial Engineering",
        bio:
          "Author and lecturer of the data feeds and technology component of the Msc financial engineering course. Specifially put together an data science module focussed on using unsupervised learning to cluster countries based on data from the UN. The project was created using R and deployed live online using Shiny. Created the blockchain content which in technical detail explained how blockchains function before delving into coding smart contracts using solidity."
      },
      {
        list_id: 7,
        name: "Data Prophet",
        role: "Data science consultancy",
        avatar_url: "/assets/images/dp.png",
        html_url: "https://dataprophet.com",
        active: null,
        company_bio: "Boutique aritificial intelligence solutions",
        bio:
          "Worked for a client on a data science project that involved pipeling through large amounts of data in real time. Used Python, AWS services (SQS) and Kafka."
      },
      {
        list_id: 8,
        name: "Newtown Partners",
        role: "Blockchain analyst",
        avatar_url: "/assets/images/np.jpg",
        html_url: "https://www.newtownpartners.com",
        active: null,
        company_bio: "Early stage venture capital",
        bio:
          "Used my technical blockchain skills to evaluate prospective start ups as well as guide start ups in our portfolio."
      },
      {
        list_id: 8,
        name: "Shawco",
        role: "Community teacher",
        avatar_url: "/assets/images/shawco.jpg",
        html_url: "https://www.newtownpartners.com",
        active: null,
        company_bio: "Foundation educating underprivledged communities in South Africa",
        bio:
          "Every monday afternoon for a year I would take bus to a local South African township (Khayelitsha), and teach a grade 7 maths class."
      }
    ],
    episode: {}
  };

  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  const getEpisodes = () => {
    dispatch({
      type: GET_EPISODES,
      payload: state.episodes
    });
  };

  const getEpisode = async list_id => {
    dispatch({
      type: GET_EPISODE,
      payload: state.episodes[list_id]
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        episodes: state.episodes,
        episode: state.episode,
        getEpisodes,
        getEpisode
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectState;
