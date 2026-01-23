'use client';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Skills } from './components/skills';
import { Experience } from './components/experience';
import { Education } from './components/education';
import { Projects } from './components/projects';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { TechMarquee } from './components/tech-mark';
import { Button } from '@/components/ui/button';
import { AIChatDrawer } from './components/ai-chart-drawer';
// import { Button } from './components/ui/button';
export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050507] text-zinc-50 selection:bg-blue-600/30">
      <Header onOpenChat={() => setIsChatOpen(true)} />

      <main className="mx-auto max-w-7xl px-6 md:px-10">
        <Hero />
      </main>

      <TechMarquee />

      <main className="mx-auto max-w-6xl space-y-32 px-6 py-24 md:px-10">
        <Skills />
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <Experience />
          <Education />
        </div>
        <Projects />
        <Contact />
      </main>

      <Footer />

      {/* Floating Chat Trigger - Changed rounded-3xl to rounded-full for a circle */}
      <Button
        size="icon"
        className="group fixed right-10 bottom-10 z-50 h-16 w-16 rounded-full bg-blue-600 shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
        onClick={() => setIsChatOpen(true)}
      >
        <MessageSquare className="h-7 w-7 transition-transform group-hover:rotate-12" />
      </Button>

      <AIChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}
