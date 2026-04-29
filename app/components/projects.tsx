'use client';
import { ExternalLink, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PROJECTS } from './data';

export const Projects = () => (
  <section id="projects" className="scroll-mt-24 space-y-10 py-16">
    <div className="space-y-2 text-center">
      <h2 className="font-bold text-3xl tracking-tight">Key Projects</h2>
      <p className="mx-auto max-w-xl text-text-secondary">
        Enterprise solutions architected with scalability and user experience in mind.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8">
      {PROJECTS.map((proj) => (
        <Card
          key={crypto.randomUUID()}
          className="group overflow-hidden border-border-default transition-all hover:border-border-default/80"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex h-64 items-center justify-center overflow-hidden bg-surface p-8 sm:p-12 lg:h-auto lg:w-2/5 dark:bg-zinc-900">
              <div className="flex h-full w-full items-center justify-center rounded-xl border border-border-default bg-background transition-transform group-hover:scale-105 dark:bg-zinc-950">
                <Layers className="h-16 w-16 text-border-default" />
              </div>
            </div>
            <div className="space-y-6 p-6 sm:p-12 lg:w-3/5">
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <Badge key={t} variant="outline" className="text-[10px]">
                    {t}
                  </Badge>
                ))}
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl">{proj.title}</h3>
              <p className="text-base text-text-secondary leading-relaxed sm:text-lg">{proj.description}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {proj.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-text-secondary">
                    <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {h}
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
