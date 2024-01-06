"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData, toolsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = (props: Props) => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 mb-8">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.3] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>

      <h2 className="text-2xl font-medium capitalize mb-8">My Tools</h2>
      <ul className="flex flex-wrap justify-center gap-2 text-gray-800">
        {toolsData.map((tool, index) => (
          <motion.li
            className="bg-gray-700 text-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {tool}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
