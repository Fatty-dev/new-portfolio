"use client";

import { motion } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:sholaodusiji@gmail.com",
    arrow: "sholaodusiji@gmail.com →",
  },
  {
    label: "GitHub",
    href: "https://github.com/Fatty-dev",
    arrow: "github.com/Fatty-dev →",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/odusiji-fatiha/",
    arrow: "linkedin.com/in/odusiji-fatiha →",
    external: true,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2347055773420",
    arrow: "Message directly →",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="py-[70px] pb-11">
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[0.72rem] tracking-widest uppercase text-gray">
              05 — Contact
            </span>
            <h2 className="text-[1.9rem] font-extrabold tracking-tight mb-4 mt-3.5 max-w-[16ch]">
              Have a project in mind? Let&apos;s talk about scope.
            </h2>
            <p className="text-gray max-w-[44ch] mb-7 text-[1.02rem]">
              Send a brief of what you&apos;re trying to build or fix, and
              I&apos;ll get back to you with a clear next step — usually within
              one business day.
            </p>
          </motion.div>
          <div className="flex flex-col">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
                className="text-base no-underline flex items-center justify-between py-4 border-b border-line transition-colors duration-150 hover:text-signal"
              >
                {link.label}
                <span className="text-gray font-mono text-[0.85rem]">
                  {link.arrow}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-between mt-14 pt-5 border-t border-line font-mono text-[0.7rem] text-gray flex-wrap gap-2.5"
        >
          <span>&copy; 2026 Fatiha Odusiji</span>
          <span>Remote worldwide</span>
        </motion.div>
      </div>
    </footer>
  );
}
