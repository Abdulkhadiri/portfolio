'use client';
import { Sparkles, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
export const AIChatDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      {/* <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} /> */}
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 w-full max-w-md border-zinc-800 border-l bg-zinc-950 shadow-2xl transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-zinc-800 border-b p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-blue-600/20 shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Kola&apos;s AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  <span className="font-bold text-[10px] text-zinc-500 uppercase tracking-widest">Gemini 3.0 Pro</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </header>

          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            <div className="flex justify-start">
              <div className="flex items-center gap-3 rounded-[2rem] rounded-tl-md border border-zinc-800 bg-zinc-900 px-5 py-3.5">
                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
                </div>
                <span className="font-medium text-xs text-zinc-500">Synthesizing...</span>
              </div>
            </div>
          </div>

          <footer className="border-zinc-800 border-t bg-zinc-950/50 p-6 backdrop-blur-md">
            <div className="flex gap-3 rounded-full border border-zinc-800 bg-zinc-900/50 p-2 transition-colors focus-within:border-blue-500/50">
              <Input
                placeholder="Ask about my workflows..."
                className="border-none bg-transparent px-4 focus-visible:ring-0"
              />
              <Button size="icon" className="h-10 w-10 shrink-0 rounded-full shadow-blue-600/20 shadow-lg">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
