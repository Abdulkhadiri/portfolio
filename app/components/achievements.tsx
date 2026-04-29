'use client';
import { Award } from 'lucide-react';
import { ACHIEVEMENTS } from './data';
import { Card } from '@/components/ui/card';

export const Achievements = () => (
  <section id="achievements" className="scroll-mt-24 space-y-10 py-16">
    <h2 className="text-center font-bold text-3xl tracking-tight md:text-left">Achievements & Awards</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {ACHIEVEMENTS.map((achievement) => (
        <Card key={crypto.randomUUID()} className="group p-6 transition-all hover:border-blue-500/50 hover:shadow-lg">
          <div className="mb-3 flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-blue-500 text-lg">{achievement.title}</h3>
              <p className="font-semibold text-sm text-text-muted">{achievement.organization}</p>
            </div>
            <time className="font-mono text-text-muted text-xs">{achievement.year}</time>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{achievement.description}</p>
        </Card>
      ))}
    </div>
  </section>
);
