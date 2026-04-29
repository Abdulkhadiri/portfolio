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
const MARQUEE_GROUPS = ['group-1', 'group-2', 'group-3', 'group-4'] as const;

export const TechMarquee = () => (
  <div className="relative select-none overflow-hidden border-border-subtle border-y bg-surface/50 py-8 dark:bg-zinc-950/80">
    {/* Fade edges */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent sm:w-40" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent sm:w-40" />

    <div className="flex w-fit animate-[marquee_35s_linear_infinite] whitespace-nowrap">
      {MARQUEE_GROUPS.map((groupId) => (
        <div key={groupId} className="flex items-center gap-12 px-6 md:gap-16 md:px-8">
          {TECH_ITEMS.map((tech, techIdx) => (
            <span
              key={`${groupId}-${tech}`}
              className="font-black text-4xl text-marquee-text transition-colors duration-300 hover:text-blue-500/20 md:text-6xl"
            >
              {tech}
              {techIdx < TECH_ITEMS.length - 1 && (
                <span className="ml-12 inline-block h-2 w-2 rounded-full bg-marquee-text align-middle md:ml-16" />
              )}
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
