"use client";

import { motion } from "framer-motion";

const technologies = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Flutter",
  "React Native",
  "REST & Webhook APIs",
  "GraphQL",
  "Claude / LLM Integrations",
  "OpenAI API",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Firebase",
  "Supabase",
  "AWS",
  "Vercel",
  "Docker",
  "Kubernetes",
  "Git / GitHub",
  "CI/CD",
  "Tailwind CSS",
  "Prisma",
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline justify-between gap-5 mb-11 flex-wrap"
      >
        <h2 className="text-[1.6rem] font-bold tracking-tight">Stack</h2>
        <span className="font-mono text-[0.72rem] tracking-widest uppercase text-gray">
          04 — Tools & languages
        </span>
      </motion.div>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.02 }}
            whileHover={{ scale: 1.05, borderColor: "var(--ink)" }}
            className="font-mono text-[0.82rem] border border-line py-2.5 px-[18px] text-ink transition-colors duration-150 hover:bg-panel cursor-default"
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
