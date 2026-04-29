'use client';
import { Sparkles, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useEffect, useRef, useState } from 'react';

export const AIChatDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isLoading = status === 'streaming' || status === 'submitted';

  const getMessageText = (message: (typeof messages)[number]) => {
    return message.parts
      .filter((part) => part.type === 'text')
      .map((part) => part.text)
      .join('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    sendMessage({ text: trimmedInput });
    setInput('');
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 transition-opacity duration-300',
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      )}
    >
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 w-full max-w-md border-border-default border-l bg-background shadow-2xl transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between border-border-default border-b p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-blue-600/20 shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Kola&apos;s AI</h3>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  <span className="font-bold text-[10px] text-text-muted uppercase tracking-widest">
                    Gemini Assistant
                  </span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-5 w-5" />
            </Button>
          </header>

          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center space-y-3 text-center opacity-50">
                <Bot className="h-12 w-12 text-blue-500" />
                <p className="text-sm">
                  Hi! I&apos;m Kola&apos;s AI assistant. Ask me anything about his portfolio, skills, or experience!
                </p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn('flex w-full', message.role === 'user' ? 'justify-end' : 'justify-start')}
              >
                <div
                  className={cn(
                    'flex max-w-[80%] items-start gap-3 rounded-2xl px-5 py-3.5',
                    message.role === 'user'
                      ? 'rounded-tr-sm bg-blue-600 text-white'
                      : 'rounded-tl-sm border border-border-default bg-surface dark:bg-zinc-900',
                  )}
                >
                  <div className="flex-1 space-y-2 overflow-hidden">
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{getMessageText(message)}</p>
                  </div>
                </div>
              </div>
            ))}

            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-red-500 text-sm dark:bg-red-900/20">
                Error: {error.message || 'Failed to send message. Please try again.'}
              </div>
            )}

            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center gap-3 rounded-[2rem] rounded-tl-sm border border-border-default bg-surface px-5 py-3.5 dark:bg-zinc-900">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
                  </div>
                  <span className="font-medium text-text-muted text-xs">Synthesizing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <footer className="border-border-default border-t bg-background/50 p-6 backdrop-blur-md">
            <form
              onSubmit={onSubmit}
              className="flex gap-3 rounded-full border border-border-default bg-surface/50 p-2 transition-colors focus-within:border-blue-500/50 dark:bg-zinc-900/50"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my workflows..."
                className="border-none bg-transparent px-4 focus-visible:ring-0"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="h-10 w-10 shrink-0 rounded-full shadow-blue-600/20 shadow-lg"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
};
