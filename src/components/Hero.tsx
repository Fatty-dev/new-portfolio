"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs tracking-[0.12em] uppercase text-gray mb-4"
        >
          Software Engineer · Builder · Problem Solver
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-extrabold text-[clamp(1.9rem,4vw,2.85rem)] leading-[1.1] tracking-tight mb-5"
        >
          I make things work.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-lg leading-relaxed text-gray max-w-[52ch] mb-8"
        >
          Software, systems, automations — I've built across the stack, shipped
          products, broken things, fixed them, and learned what actually matters.
          Currently into AI tooling, backend architecture, and making complex
          stuff feel simple.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 flex-wrap"
        >
          <a href="#work" className="btn-primary text-sm px-5 py-2.5">
            See what I've built →
          </a>
          <a href="#contact" className="btn-secondary text-sm px-5 py-2.5">
            Let's talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
