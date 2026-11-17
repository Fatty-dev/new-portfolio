"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const WebMobileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="4" width="18" height="14" rx="1" />
    <path d="M3 9h18" />
    <path d="M8 21h8" />
  </svg>
);

const AutomationIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
  </svg>
);

const AIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
    <path d="M8 15c1 1 2.5 1.5 4 1.5s3-.5 4-1.5" />
  </svg>
);

const APIIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M9 3h6l1 4H8l1-4z" />
    <path d="M6 7h12l-1 14H7L6 7z" />
  </svg>
);

const RepairsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M14 3v4a1 1 0 001 1h4" />
    <path d="M17 21H7a2 2 0 01-2-2V5a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

const SupportIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 12l4-8h10l4 8-9 9-9-9z" />
    <path d="M3 12h18" />
  </svg>
);

const services = [
  {
    icon: <WebMobileIcon />,
    title: "Full-Stack Web & Mobile Apps",
    description:
      "End-to-end applications — front end, back end, and database — built for how your team or customers actually work.",
  },
  {
    icon: <AutomationIcon />,
    title: "Process Automation",
    description:
      "Turning repetitive manual work into scripts and pipelines that run themselves, correctly, every time.",
  },
  {
    icon: <AIIcon />,
    title: "AI Agents & Claude Setup",
    description:
      "Task-specific AI agents and Claude-based workflows wired into your tools, handling real work rather than demos.",
  },
  {
    icon: <APIIcon />,
    title: "API Integrations",
    description:
      "Connecting the tools you rely on — payments, messaging (including WhatsApp), CRMs, and third-party services — into one working system.",
  },
  {
    icon: <RepairsIcon />,
    title: "System Repairs & Upgrades",
    description:
      "Diagnosing what's slow or broken in an existing system and fixing it without disrupting what already works.",
  },
  {
    icon: <SupportIcon />,
    title: "Ongoing Support",
    description:
      "Maintenance and small feature work after launch, so the system keeps pace with your needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline justify-between gap-5 mb-11 flex-wrap"
      >
        <h2 className="text-[1.6rem] font-bold tracking-tight">I've got your back with…</h2>
        <span className="font-mono text-[0.72rem] tracking-widest uppercase text-gray">
          03 — Capabilities
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
