'use client';
// import Image from 'next/image';
// import { PROFILE_IMAGE } from './data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Hero = () => (
  <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-12 pt-32 pb-16 lg:min-h-[85vh] lg:flex-row lg:justify-between lg:gap-20 lg:pt-0">
    {/* Background Glow */}
    <div className="pointer-events-none absolute top-1/2 left-0 -z-10 h-125 w-125 -translate-y-1/2 rounded-full bg-glow-blue blur-[120px]" />

    {/* Left Column: Content */}
    <div className="order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left">
      <div className="space-y-4">
        <div className="flex justify-center lg:justify-start">
          <Badge
            variant="outline"
            className="border-blue-500/20 bg-blue-600/10 px-5 py-1.5 font-black text-[10px] text-blue-500 uppercase tracking-[0.2em] md:text-xs dark:text-blue-400"
          >
            Available for New Projects
          </Badge>
        </div>
        <h1 className="font-black text-6xl leading-[0.85] tracking-tighter sm:text-7xl md:text-8xl lg:text-[9rem] lg:leading-[0.8]">
          KOLA <br />
          <span className="text-blue-600">ABDUL</span> <br />
          <span className="text-text-subtle dark:text-zinc-800">KHADIRI</span>
        </h1>
      </div>

      <p className="mx-auto max-w-145 font-medium text-lg text-text-muted leading-tight md:text-xl lg:mx-0 lg:text-2xl">
        Associate Software Engineer specializing in <span className="text-foreground">enterprise automation</span> and{' '}
        <span className="text-foreground">scalable cloud architecture</span>.
      </p>

      <div className="flex flex-col justify-center gap-5 pt-4 sm:flex-row lg:justify-start">
        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="h-16 w-16 rounded-full border-border-default p-0 transition-all hover:scale-105 hover:bg-surface-hover"
            onClick={() => window.open('https://github.com/kolaabdul', '_blank')}
          >
            <GithubIcon className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-16 w-16 rounded-full border-border-default p-0 transition-all hover:scale-105 hover:bg-surface-hover"
            onClick={() => window.open('https://linkedin.com/in/kolaabdul', '_blank')}
          >
            <LinkedinIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>

    {/* Right Column: Visual */}
    <div className="fade-in zoom-in relative order-1 shrink-0 animate-in duration-1000 lg:order-2">
      <div className="group relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-150 lg:w-125">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 -z-10 rounded-[3rem] border-20 border-border-subtle/50 transition-transform duration-700 group-hover:scale-105" />

        {/* Profile Image Container */}
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] border border-border-default bg-surface shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* <Image
            width={500}
            height={600}
            src={PROFILE_IMAGE}
            alt="Kola Abdul Khadiri"
            priority
            className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
          /> */}
        </div>
      </div>
    </div>
  </section>
);
