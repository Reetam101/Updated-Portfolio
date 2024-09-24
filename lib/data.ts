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
import materHospital from "@/public/mater-hospital.png";
import myPerfectShot from "@/public/my-perfect-shot.png";

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
    title: "Associate Software Engineer | Fortmindz Private Limited",
    location: "Kolkata, West Bengal",
    description:
      "Working as a MERN stack developer. I have built complex REST APIs and integrated secure payment gateway and user authentication with Node.js and Express, worked with AWS S3 and amplify, built custom admin dashboards and have worked on web applications with React.js, Redux Toolkit and Material UI. My tech stack includes Node.js, Express, MongoDB, React.js, redux, Material UI, TypeScript. I'm open to full-time opportunities.",
    icon: React.createElement(FaNodeJs),
    date: "Sept 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "My Perfect Shot",
    description:
      "I have built the backend REST API for this web application, and have also worked with the frontend team to build the components of the website using React.js. ",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3 Bucket",
      "JWTs",
      "Stripe",
    ],
    liveUrl: "https://staging.d2j1m1jfrj35l1.amplifyapp.com/home",
    imageUrl: myPerfectShot,
  },
  {
    title: "Mater Hospital",
    description:
      "I have built the backend REST APIs of this admin dashboard, I have also worked with the frontend developer to improve and optimize the code using React.js.",
    tags: [
      "React.js",
      "Bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Google Calendar API",
      "AWS S3",
    ],
    liveUrl: "https://hospital-app-admin-frontend.onrender.com/",
    imageUrl: materHospital,
  },
  {
    title: "Indie Sync",
    description:
      "I worked as a full stack developer working on both the frontend and the backend of this project. It's a platform for indie artists to upload and sell the license to their songs.",
    tags: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Digital Ocean Spaces",
    ],
    liveUrl: "https://www.indiesync.io/home",
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
    liveUrl: "",
    imageUrl: letsChat,
  },
  {
    title: "React Admin Dashboard",
    description:
      "An admin dashboard UI built using React.js with different charts, tables and graphs for data visualization and statistics.",
    tags: ["React.js", "Material UI", "Nivo charts", "Formik"],
    liveUrl: "",
    imageUrl: reactAdminDashboard,
  },
  {
    title: "Ecommerce Rest API",
    description:
      "A backend REST API service for an ecommerce website with rate limiting, endpoint protection and caching implemented.",
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "",
    imageUrl: ecomRestApi,
  },
  {
    title: "Code Room",
    description:
      "A web application that allows users to join a room and code together in real time.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    liveUrl: "",
    imageUrl: codeRoom,
  },
  {
    title: "AniBlogs",
    description:
      "A simple blog website that allows the user to write and post blogs related to anime and japan.",
    tags: ["React.js", "Node.js", "Express", "MySQL", "sequelize", "Bootstrap"],
    liveUrl: "",
    imageUrl: aniblogs,
  },
  {
    title: "WB House Price Prediction",
    description:
      "A web application that uses Machine Learning regression models in the backend to predict the prices of houses in West Bengal.",
    tags: ["Python", "Flask", "scikit-learn", "regression"],
    liveUrl: "",
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
  "Prisma",
  "Python",
  "Flask",
];

export const toolsData = [
  "Vscode",
  "Bash",
  "Jupyter Notebook",
  "Github",
] as const;
