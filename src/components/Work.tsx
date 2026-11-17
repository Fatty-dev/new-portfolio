"use client";

import { motion } from "framer-motion";
import ProjectTile from "./ProjectTile";

const projects = [
  {
    title: "Wawa Fertility",
    description:
      "An integrated operating system for fertility clinics that unifies clinical, lab, patient, and financial data with AI-assisted documentation.",
    caseNumber: "01",
    tags: ["React", "Node.js", "AI"],
    image: "/projects/wawa.jpg",
    link: "https://www.wawafertility.com/",
  },
  {
    title: "Light",
    description:
      "AI-native ERP platform for multi-entity finance teams, featuring automated reconciliation and global bill pay across 80+ countries.",
    caseNumber: "02",
    tags: ["TypeScript", "React", "AI Agents"],
    image: "/projects/light-image.png",
    link: "https://light.inc/",
  },
  {
    title: "Tobi",
    description:
      "Danish investment app helping families invest their children's savings with automated tax reporting and socially responsible portfolios.",
    caseNumber: "03",
    tags: ["React Native", "Fintech"],
    image: "/projects/tobi.png",
    link: "https://www.tobi.dk/",
  },
  {
    title: "Apylon",
    description:
      "Intelligent revenue management for European healthcare providers using AI agents to automate billing and reduce claim denials.",
    caseNumber: "04",
    tags: ["Python", "ML", "Healthcare"],
    image: "/projects/apylon.webp",
    link: "https://www.apylon.co/",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 border-t border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline justify-between gap-5 mb-11 flex-wrap"
      >
        <h2 className="text-[1.6rem] font-bold tracking-tight">
          Tiny fraction of my work
        </h2>
        <span className="font-mono text-[0.72rem] tracking-[0.1em] uppercase text-gray">
          01 — Case studies
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            caseNumber={project.caseNumber}
            tags={project.tags}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
