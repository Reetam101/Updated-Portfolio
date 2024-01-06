import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aniblogs from "@/public/aniblogs.png";
import codeRoom from "@/public/code-room.png";
import ecomRestApi from "@/public/ecom-rest-api.png";
import housePricePrediction from "@/public/house-prediction.png";
import letsChat from "@/public/lets-chat.png";
import reactAdminDashboard from "@/public/react-admin-dashboard.png";
import indieSync from "@/public/indie-sync.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from University of Engineering and Management Kolkata",
    location: "Kolkata, West Bengal",
    description:
      "I have completed B. Tech in Computer Science and Information Technology from University of Engineering and Management Kolkata with a CGPA of 8.93(out of 10).",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Full Stack Engineer 1 - Intern | Settyl",
    location: "Remote",
    description:
      "I worked as an Full Stack Intern for 3 months. Where I mainly worked with React.js, Ionic framework and MongoDB. I got to learn about Micro Frontend Architecture and team work. I built a drag and drop component generation feature using React DND library and MUI.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Oct 2023",
  },
  {
    title: "Trainee Software Engineer | Fortmindz Private Limited",
    location: "Kolkata, West Bengal",
    description:
      "I currently work as Node.js backend developer and some React.js work. I have built complex REST APIs and integrated secure payment gateway and user authentication. My tech stack includes Node.js, Express, MongoDB, React.js, TypeScript. I'm open to full-time opportunities.",
    icon: React.createElement(FaNodeJs),
    date: "Sept 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Indie Sync",
    description:
      "I worked as a backend developer on this project. It's a platform for indie artists to upload and sell their music.",
    tags: ["React.js", "Node.js", "Express", "MongoDB"],
    imageUrl: indieSync,
  },
  {
    title: "Lets Chat",
    description:
      "A full stack chat web application with both one on one and group chat feature.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Chakra UI",
    ],
    imageUrl: letsChat,
  },
  {
    title: "React Admin Dashboard",
    description:
      "An admin dashboard UI built using React.js with different charts, tables and graphs for data visualization and statistics.",
    tags: ["React.js", "Material UI", "Nivo charts", "Formik"],
    imageUrl: reactAdminDashboard,
  },
  {
    title: "Ecommerce Rest API",
    description:
      "A backend REST API service for an ecommerce website with rate limiting, endpoint protection and caching implemented.",
    tags: ["Node.js", "Express", "MongoDB"],
    imageUrl: ecomRestApi,
  },
  {
    title: "Code Room",
    description:
      "A web application that allows users to join a room and code together in real time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    imageUrl: codeRoom,
  },
  {
    title: "AniBlogs",
    description:
      "A simple blog website that allows the user to write and post blogs related to anime and japan.",
    tags: ["React.js", "Node.js", "Express", "MySQL", "sequelize", "Bootstrap"],
    imageUrl: aniblogs,
  },
  {
    title: "WB House Price Prediction",
    description:
      "A web application that uses Machine Learning regression models in the backend to predict the prices of houses in West Bengal.",
    tags: ["Python", "Flask", "scikit-learn", "regression"],
    imageUrl: housePricePrediction,
  },
] as const;

export const skillsData = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "React Native",
  "Redux Toolkit",
  "Node.js",
  "Express",
  "Git",
  "Material UI",
  "MongoDB",
  "MySQL",
  "Sequelize",
  "Python",
  "Flask",
  "Numpy",
  "Pandas",
];

export const toolsData = [
  "Vscode",
  "Bash",
  "Jupyter Notebook",
  "Github",
] as const;
