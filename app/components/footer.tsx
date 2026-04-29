'use client';

export const Footer = () => (
  <footer className="border-border-subtle border-t bg-surface/30 py-10 dark:bg-zinc-950/50">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row md:px-10">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
          <span className="font-black text-[10px] text-white italic">AK</span>
        </div>
        <span className="font-bold text-sm text-text-muted tracking-wider">
          ABDUL<span className="text-blue-600">.</span>DEV
        </span>
      </div>
      <p className="font-medium text-text-muted text-xs">
        &copy; {new Date().getFullYear()} Kola Abdul Khadiri. Crafted with precision.
      </p>
    </div>
  </footer>
);

export default Footer;
