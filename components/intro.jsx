"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/59496980?v=4"
              alt="Reetam protrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.5,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I am Reetam.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">7 months</span> of working experience at
        startups. I enjoy building{" "}
        <span className="italic">websites and apps</span>. My main focus is{" "}
        <span className="font-bold">
          MERN stack(MongoDB, Express, React, Node.js)
        </span>
        .
      </motion.p>

      <motion.div
        className="flex flex-row gap-4 items-center justify-center px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <FaArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="https://drive.google.com/file/d/1GXHwyiuxwk5qHLOiSq7aoRGk9Y47mVDj/view?usp=drive_link"
          target="_blank"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download Resume{" "}
          <FaDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white tex-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.25rem] 
        focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/reetam-chatterjee/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          className="bg-white tex-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.25rem] focus:scale-110 hover:scale-110 hover:bg-gray-100 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://github.com/Reetam101"
          target="_blank"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;
