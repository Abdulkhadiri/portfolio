'use client';
import Image from 'next/image';
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

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Hero = () => (
  <section className="noise-overlay relative flex min-h-[90vh] flex-col items-center justify-center gap-12 pt-32 pb-20 lg:min-h-[85vh] lg:flex-row lg:justify-between lg:gap-20 lg:pt-0">
    {/* Background Glows */}
    <div className="pointer-events-none absolute top-1/3 left-0 -z-10 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-glow-blue blur-[120px]" />
    <div className="pointer-events-none absolute right-0 bottom-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-glow-blue opacity-50 blur-[100px]" />

    {/* Left Column: Content */}
    <div className="relative z-10 order-2 flex-1 space-y-8 text-center lg:order-1 lg:text-left">
      <div className="space-y-5">
        {/* Status Badge */}
        <div className="flex justify-center lg:justify-start">
          <Badge
            variant="outline"
            className="group border-blue-500/20 bg-blue-600/5 px-5 py-1.5 font-semibold text-[10px] text-blue-500 uppercase tracking-[0.2em] backdrop-blur-sm md:text-xs dark:border-blue-400/20 dark:text-blue-400"
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for New Projects
          </Badge>
        </div>

        {/* Name */}
        <h1 className="font-black text-6xl leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl lg:text-[9rem] lg:leading-[0.82]">
          KOLA <br />
          <span className="gradient-text">ABDUL</span> <br />
          <span className="text-text-subtle dark:text-zinc-800">KHADIRI</span>
        </h1>
      </div>

      {/* Role / Tagline */}
      <div className="space-y-3">
        <p className="font-mono text-text-muted text-xs uppercase tracking-[0.3em]">Associate Software Engineer</p>
        <p className="mx-auto max-w-[540px] text-base text-text-secondary leading-relaxed md:text-lg lg:mx-0 lg:text-xl">
          Building <span className="font-semibold text-foreground">enterprise automation</span> systems and{' '}
          <span className="font-semibold text-foreground">scalable cloud architecture</span> that power modern
          businesses.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
        <Button
          size="lg"
          className="rounded-full bg-blue-600 px-8 font-semibold text-sm text-white shadow-blue-600/25 shadow-lg transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
          onClick={() => {
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <MailIcon className="mr-2 h-4 w-4" />
          Get in Touch
        </Button>
        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-12 rounded-full border-border-default p-0 transition-all hover:scale-110 hover:border-blue-500/30 hover:bg-surface-hover active:scale-95"
            onClick={() => window.open('https://github.com/Abdulkhadiri', '_blank')}
          >
            <GithubIcon className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-12 w-12 rounded-full border-border-default p-0 transition-all hover:scale-110 hover:border-blue-500/30 hover:bg-surface-hover active:scale-95"
            onClick={() => window.open('https://in.linkedin.com/in/abdul-khadiri-kola-9a7751308', '_blank')}
          >
            <LinkedinIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>

    {/* Right Column: Visual */}
    <div className="fade-in zoom-in relative order-1 shrink-0 animate-in duration-1000 lg:order-2">
      <div className="group relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[420px]">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 -z-10 rounded-[3rem] border-[16px] border-border-subtle/30 transition-transform duration-700 group-hover:scale-105" />

        {/* Floating accent shapes */}
        <div className="absolute -top-4 -right-4 h-20 w-20 animate-float rounded-full bg-blue-500/10 blur-2xl" />
        <div
          className="absolute -bottom-6 -left-6 h-24 w-24 animate-float rounded-full bg-blue-600/8 blur-2xl"
          style={{ animationDelay: '3s' }}
        />

        {/* Profile Image Container */}
        <div className="h-full w-full overflow-hidden rounded-[2.5rem] border border-border-default bg-surface shadow-2xl shadow-black/10 dark:shadow-black/30">
          <Image
            src="/unnamed.jpg"
            alt="Kola Abdul Khadiri portrait"
            width={840}
            height={1000}
            className="h-full w-full object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);
