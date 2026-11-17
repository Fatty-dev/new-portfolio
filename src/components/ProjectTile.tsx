"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectTileProps {
  title: string;
  description: string;
  caseNumber: string;
  tags: string[];
  image: string;
  link: string;
  index: number;
}

export default function ProjectTile({
  title,
  description,
  caseNumber,
  tags,
  image,
  link,
  index,
}: ProjectTileProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        className="aspect-video overflow-hidden relative bg-panel border border-line"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-300"
        />
      </motion.div>
      <div className="flex justify-between items-baseline mt-4 gap-3">
        <h3 className="text-[1.1rem] font-bold tracking-tight">{title}</h3>
        <span className="font-mono text-[0.72rem] text-gray shrink-0">
          {caseNumber}
        </span>
      </div>
      <p className="text-gray text-[0.94rem] mt-2 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="font-mono text-[0.66rem] text-gray border border-line py-1 px-2.5"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-gray hover:border-gray transition-colors"
      >
        View project →
      </a>
    </motion.article>
  );
}
