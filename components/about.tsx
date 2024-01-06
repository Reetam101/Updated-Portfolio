"use client"

import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Engineering degree in{" "}
        <span className="font-medium">Computer Science & Information Technology</span>, I decided to keep on pursuing my
        passion for programming.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Node.js, Express and MongoDB
        </span>
        . I am also familiar with TypeScript, React Native, Flask and MySQL database. I am always looking to
        learn new technologies such as <span className="italic">Next.js, API testing and Message Brokers</span>. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer or a full stack engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching movies. I also enjoy{" "}
        <span className="font-medium">sketching</span>.
      </p>
    </motion.section>
  );
};

export default About;
