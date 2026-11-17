"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="bg-paper p-7 flex flex-col gap-3.5 transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="text-signal">{icon}</div>
      <h3 className="text-[1.02rem] font-bold">{title}</h3>
      <p className="text-gray text-[0.92rem]">{description}</p>
    </motion.div>
  );
}
