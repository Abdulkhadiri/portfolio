'use client';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from './data';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Education = () => (
  <section className="space-y-8 py-16">
    <h2 className="font-bold text-3xl tracking-tight">Academic Base</h2>
    <Card className="group relative overflow-hidden border-border-default bg-gradient-to-br from-surface to-surface-elevated p-8 dark:from-zinc-900 dark:to-zinc-950">
      <div className="absolute -top-12 -right-12 h-48 w-48 bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" />
      <div className="relative space-y-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated dark:bg-zinc-800">
          <GraduationCap className="h-8 w-8 text-foreground" />
        </div>
        <div>
          <h3 className="mb-1 font-bold text-2xl">{EDUCATION.degree}</h3>
          <p className="font-medium text-text-secondary">{EDUCATION.school}</p>
        </div>
        <div className="flex items-center justify-between border-border-default border-t pt-4">
          <Badge variant="secondary" className="py-1 text-base">
            CGPA: {EDUCATION.cgpa}
          </Badge>
          <span className="font-mono text-sm text-text-muted">{EDUCATION.period}</span>
        </div>
      </div>
    </Card>
  </section>
);
