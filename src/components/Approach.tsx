"use client";

import { motion } from "framer-motion";

const approachItems = [
  {
    index: "01",
    title: "Scoped before it starts",
    description:
      "A written brief and timeline agreed up front, so there's no ambiguity about what's being built.",
  },
  {
    index: "02",
    title: "Scheduled check-ins",
    description:
      "Async updates plus a standing call, on a schedule that fits your team's hours.",
  },
  {
    index: "03",
    title: "Working software, early",
    description: "Deployed links and demos along the way, not just at the end.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 border-b border-line">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-baseline justify-between gap-5 mb-11 flex-wrap"
      >
        <h2 className="text-[1.6rem] font-bold tracking-tight">
          Remote by default, reliable by design
        </h2>
        <span className="font-mono text-[0.72rem] tracking-widest uppercase text-gray">
          02 — Working method
        </span>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray mb-4 text-[1.02rem]">
            I&apos;m a full-stack developer working fully remote, and I&apos;ve
            run my practice that way from day one — the systems for staying in
            sync with a client aren&apos;t an afterthought, they&apos;re built
            into how every project runs.
          </p>
          <p className="text-gray text-[1.02rem]">
            You get clear scope before work starts, regular check-ins at a
            cadence you set, and one point of contact throughout. No time-zone
            guessing games, no radio silence.
          </p>
        </motion.div>
        <ul className="list-none flex flex-col gap-[22px]">
          {approachItems.map((item, idx) => (
            <motion.li
              key={item.index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
              className="flex gap-4"
            >
              <span className="font-mono text-signal text-[0.8rem] pt-0.5">
                {item.index}
              </span>
              <div>
                <b className="block mb-1 text-base">{item.title}</b>
                <span className="text-gray text-[0.92rem]">
                  {item.description}
                </span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
