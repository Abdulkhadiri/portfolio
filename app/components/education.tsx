'use client';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from './data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Education = () => (
  <section className="space-y-8 py-12">
    <div className="space-y-5">
      <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
        Education
      </span>
      <h2 className="font-bold text-3xl tracking-tight md:text-4xl">Academic Base</h2>
    </div>

    <Card className="card-shimmer gradient-border group relative overflow-hidden border-border-default bg-gradient-to-br from-surface to-surface-elevated p-8 dark:from-zinc-900/50 dark:to-zinc-950/50">
      {/* Corner glow */}
      <div className="absolute -top-16 -right-16 h-48 w-48 bg-blue-500/0 blur-3xl transition-all duration-700 group-hover:bg-blue-500/10" />

      <div className="relative space-y-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-500/10">
          <GraduationCap className="h-7 w-7 text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">{EDUCATION.degree}</h3>
          <p className="font-medium text-text-secondary">{EDUCATION.school}</p>
        </div>
        <div className="flex items-center justify-between border-border-default border-t pt-5">
          <Badge
            variant="secondary"
            className="bg-blue-500/10 py-1 font-bold text-base text-blue-500 dark:bg-blue-500/10 dark:text-blue-400"
          >
            CGPA: {EDUCATION.cgpa}
          </Badge>
          <span className="rounded-full bg-surface-elevated px-3 py-0.5 font-mono text-sm text-text-muted dark:bg-zinc-800/80">
            {EDUCATION.period}
          </span>
        </div>
      </div>
    </Card>
  </section>
);
