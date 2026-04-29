'use client';
const TECH_ITEMS = [
  'NEXT.JS',
  'REACT',
  'TYPESCRIPT',
  'NODE.JS',
  'POSTGRESQL',
  'GCP',
  'N8N',
  'VERTEX AI',
  'DOCKER',
  'KUBERNETES',
  'TAILWIND',
];

export const TechMarquee = () => (
  <div className="select-none overflow-hidden border-border-subtle border-y bg-surface py-10 dark:bg-zinc-950">
    <div className="flex w-fit animate-[marquee_30s_linear_infinite] whitespace-nowrap">
      {[...Array(4)].map(() => (
        <div key={crypto.randomUUID()} className="flex items-center gap-16 px-8">
          {TECH_ITEMS.map((tech) => (
            <span
              key={crypto.randomUUID()}
              className="font-black text-5xl text-marquee-text transition-colors hover:text-marquee-text-hover md:text-7xl"
            >
              {tech}
            </span>
          ))}
        </div>
      ))}
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);
