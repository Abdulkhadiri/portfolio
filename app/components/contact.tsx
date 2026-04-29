'use client';
import { Card } from '@/components/ui/card';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export const Contact = () => (
  <section id="contact" className="scroll-mt-24 py-16">
    <Card className="group relative mx-auto max-w-4xl overflow-hidden border-border-default bg-background p-10 text-center sm:p-14">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-violet-500/[0.03]" />
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative space-y-8">
        <div className="space-y-4">
          <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1 font-mono text-[11px] text-blue-500 uppercase tracking-[0.25em] dark:text-blue-400">
            Get in Touch
          </span>
          <h2 className="font-bold text-3xl tracking-tight sm:text-4xl">Let&apos;s Work Together</h2>
          <p className="mx-auto max-w-md text-sm text-text-secondary leading-relaxed sm:text-base">
            Ready to bring automated excellence to your next enterprise project?
          </p>
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="mailto:abdulkhadirikola@gmail.com"
            className="group/link inline-flex items-center justify-center gap-3 rounded-full border border-border-default bg-surface/50 px-6 py-3.5 font-medium text-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5 hover:shadow-blue-500/5 hover:shadow-lg"
          >
            <Mail className="h-4 w-4 text-blue-500" />
            abdulkhadirikola@gmail.com
            <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
          <a
            href="tel:+917780124859"
            className="group/link inline-flex items-center justify-center gap-3 rounded-full border border-border-default bg-surface/50 px-6 py-3.5 font-medium text-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5 hover:shadow-emerald-500/5 hover:shadow-lg"
          >
            <Phone className="h-4 w-4 text-emerald-500" />
            +91 77801 24859
            <ArrowUpRight className="h-3.5 w-3.5 text-text-muted transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </Card>
  </section>
);
