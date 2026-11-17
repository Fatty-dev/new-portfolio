interface NodeProps {
  label: string;
  tag: string;
  style: React.CSSProperties;
  isCore?: boolean;
}

function Node({ label, tag, style, isCore = false }: NodeProps) {
  const baseClasses = `absolute -translate-x-1/2 -translate-y-1/2 font-mono text-[0.7rem] text-center
    px-3 py-2.5 bg-paper border border-line rounded-md w-32 text-gray
    transition-colors duration-150 hover:border-signal hover:text-ink cursor-default`;

  const coreClasses = `absolute -translate-x-1/2 -translate-y-1/2 font-mono text-center
    px-3.5 py-4 border border-signal rounded-md w-[148px] bg-[#EEF4F0]`;

  return (
    <div
      className={isCore ? coreClasses : baseClasses}
      style={style}
      tabIndex={isCore ? undefined : 0}
    >
      <span
        className={`block font-semibold mb-0.5 ${
          isCore ? "text-signal text-[0.76rem]" : "text-ink"
        }`}
      >
        {label}
      </span>
      <span className="text-gray text-[0.64rem]">{tag}</span>
    </div>
  );
}

export default function Diagram() {
  return (
    <div
      className="relative aspect-[1/0.95] border border-line rounded-lg bg-panel"
      role="img"
      aria-label="Diagram showing Fatiha's core service at the center, connected to five service areas: full-stack web and mobile apps, automation, AI agents, API integrations, and system upgrades."
    >
      <svg
        viewBox="0 0 400 380"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          className="fill-none stroke-signal/55 stroke-[1.4]"
          strokeDasharray="4 5"
          d="M200,190 L100,70"
        />
        <path
          className="fill-none stroke-signal/55 stroke-[1.4]"
          strokeDasharray="4 5"
          d="M200,190 L300,70"
        />
        <path
          className="fill-none stroke-[#D2CFC6] stroke-[1.4]"
          strokeDasharray="4 5"
          d="M200,190 L60,190"
        />
        <path
          className="fill-none stroke-[#D2CFC6] stroke-[1.4]"
          strokeDasharray="4 5"
          d="M200,190 L340,190"
        />
        <path
          className="fill-none stroke-signal/55 stroke-[1.4]"
          strokeDasharray="4 5"
          d="M200,190 L200,330"
        />
      </svg>

      <Node
        label="Fatiha — Build System"
        tag="STATUS: ONLINE"
        style={{ top: "50%", left: "50%" }}
        isCore
      />
      <Node
        label="Web & Mobile Apps"
        tag="React · Flutter"
        style={{ top: "18%", left: "25%" }}
      />
      <Node
        label="AI Agents"
        tag="Claude · LLM workflows"
        style={{ top: "18%", left: "75%" }}
      />
      <Node
        label="Process Automation"
        tag="Scripts · Pipelines"
        style={{ top: "50%", left: "15%" }}
      />
      <Node
        label="API Integrations"
        tag="Payments · Messaging · CRMs"
        style={{ top: "50%", left: "85%" }}
      />
      <Node
        label="System Upgrades"
        tag="Fixes · Performance"
        style={{ top: "86%", left: "50%" }}
      />
    </div>
  );
}
