'use client';
import { Card } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
export const Contact = () => (
  <section id="contact" className="scroll-mt-24 py-20">
    <Card className="group relative mx-auto max-w-4xl overflow-hidden border-border-default bg-background p-8 text-center sm:p-12">
      {/* <h2 className="absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" /> */}
      <h2 className="mb-4 font-bold text-3xl tracking-tight sm:text-4xl">Let&apos;s Work Together</h2>
      <p className="mx-auto mb-10 max-w-md text-sm text-text-secondary sm:text-base">
        Ready to bring automated excellence to your next enterprise project?
      </p>
      <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row sm:gap-6">
        <a
          href="mailto:abdulkhadirikola@gmail.com"
          className="flex items-center justify-center gap-3 rounded-full border border-border-default px-6 py-3 text-sm transition-all hover:bg-surface-hover"
        >
          <Mail className="h-5 w-5 text-blue-500" /> abdulkhadirikola@gmail.com
        </a>
        <a
          href="tel:+917780124859"
          className="flex items-center justify-center gap-3 rounded-full border border-border-default px-6 py-3 text-sm transition-all hover:bg-surface-hover"
        >
          <Phone className="h-5 w-5 text-green-500" /> +91 77801 24859
        </a>
      </div>
    </Card>
  </section>
);
