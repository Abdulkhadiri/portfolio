'use client';
import type React from 'react';
import { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const Header = ({ onOpenChat }: { onOpenChat: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-500',
        scrolled ? 'border-zinc-800 border-b bg-zinc-950/80 py-3 backdrop-blur-xl' : 'bg-transparent py-6',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3 font-bold tracking-tighter">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-blue-600/20 shadow-lg">
            <span className="font-black text-sm text-white italic">AK</span>
          </div>
          <span className="font-black text-xl tracking-widest">
            ABDUL<span className="text-blue-600">.</span>DEV
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 font-bold text-xs uppercase tracking-widest md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-zinc-500 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="outline"
            size="sm"
            onClick={onOpenChat}
            className="rounded-full border-blue-600/20 bg-blue-600/5 px-6 text-blue-400 hover:bg-blue-600 hover:text-white"
          >
            <Sparkles className="mr-2 h-3.5 w-3.5" /> AI Assistant
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          'absolute top-full left-0 w-full overflow-hidden border-zinc-800 border-b bg-zinc-950 transition-all duration-300 md:hidden',
          isMenuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className="flex flex-col gap-6 p-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-bold text-xl text-zinc-400 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Button onClick={onOpenChat} className="w-full rounded-2xl bg-blue-600 py-6 font-bold text-lg text-white">
            <Sparkles className="mr-2 h-5 w-5" /> Talk to AI
          </Button>
        </div>
      </div>
    </nav>
  );
};
