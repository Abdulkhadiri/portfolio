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
  <div className="select-none overflow-hidden border-zinc-900 border-y bg-zinc-950 py-10">
    <div className="flex w-fit animate-[marquee_30s_linear_infinite] whitespace-nowrap">
      {[...Array(4)].map(() => (
        <div key={crypto.randomUUID()} className="flex items-center gap-16 px-8">
          {TECH_ITEMS.map((tech) => (
            <span
              key={crypto.randomUUID()}
              className="font-black text-5xl text-zinc-900 transition-colors hover:text-blue-600/20 md:text-7xl"
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
