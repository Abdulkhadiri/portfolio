'use client';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { Achievements } from './components/achievements';
import { Education } from './components/education';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { TechMarquee } from './components/tech-mark';
import { Button } from '@/components/ui/button';
import { AIChatDrawer } from './components/ai-chart-drawer';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-blue-600/30">
      <Header onOpenChat={() => setIsChatOpen(true)} />

      <main className="mx-auto max-w-7xl px-6 md:px-10">
        <Hero />
      </main>

      <TechMarquee />

      <main className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <Skills />
        <div className="section-divider my-6" />
        <Experience />
        <div className="section-divider my-6" />
        <Achievements />
        <div className="section-divider my-6" />
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <Education />
        </div>
        <div className="section-divider my-6" />
        <Projects />
        <div className="section-divider my-6" />
        <Contact />
      </main>

      <Footer />

      {/* Floating Chat Trigger */}
      <Button
        size="icon"
        className="group fixed right-8 bottom-8 z-50 h-14 w-14 rounded-full bg-blue-600 shadow-blue-600/25 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-blue-600/40 hover:shadow-xl active:scale-95"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageSquare className="h-6 w-6 transition-transform group-hover:rotate-12" />
      </Button>

      <AIChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
