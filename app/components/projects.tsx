'use client';
import { Layers, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from './data';

const PROJECT_GRADIENTS = [
  'from-blue-600/20 via-indigo-500/10 to-violet-500/5',
  'from-emerald-500/15 via-teal-500/10 to-cyan-500/5',
];

export const Projects = () => (
  <section id="projects" className="scroll-mt-24 space-y-12 py-16">
    <div className="space-y-5 text-center">
      <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
        Featured Work
      </span>
      <h2 className="font-bold text-3xl tracking-tight md:text-4xl">Key Projects</h2>
      <p className="mx-auto max-w-xl text-base text-text-secondary leading-relaxed">
        Enterprise solutions architected with scalability and user experience in mind.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-6">
      {PROJECTS.map((proj, i) => (
        <Card
          key={`${proj.title}`}
          className="card-shimmer gradient-border group overflow-hidden border-border-default transition-all duration-500 hover:shadow-blue-500/5 hover:shadow-xl"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Project Visual */}
            <div
              className={`relative flex h-56 items-center justify-center overflow-hidden bg-gradient-to-br ${PROJECT_GRADIENTS[i % PROJECT_GRADIENTS.length]} p-8 sm:p-12 lg:h-auto lg:w-2/5`}
            >
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl border border-border-default/50 bg-background/80 backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.03]">
                <Layers className="h-14 w-14 text-blue-500/30 transition-colors duration-300 group-hover:text-blue-500/60" />
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-5 p-6 sm:p-10 lg:w-3/5">
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="border-border-default/80 bg-surface/50 font-semibold text-[10px] uppercase tracking-wider"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <h3 className="font-bold text-2xl tracking-tight sm:text-3xl">{proj.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed sm:text-base">{proj.description}</p>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
                {proj.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 shadow-blue-500/50 shadow-sm" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  className="group/btn rounded-full border-border-default px-6 transition-all hover:border-blue-500/30 hover:bg-blue-500/5 sm:w-auto"
                >
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
