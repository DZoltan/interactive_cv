import { Component, DestroyRef, inject, signal } from '@angular/core';
import { TERMINAL_SECTIONS, TerminalSection } from './terminal-data';

const TYPING_SPEED_DIVISOR = 4.8;

interface TerminalEntry {
  type: 'command' | 'output';
  text: string;
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('sajat-oldal');
  protected readonly sections = TERMINAL_SECTIONS;
  protected readonly history = signal<TerminalEntry[]>([]);
  protected readonly typingLine = signal<string | null>(null);

  private readonly queue: TerminalSection[] = [];
  private typingTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      if (this.typingTimer !== null) {
        clearTimeout(this.typingTimer);
      }
    });
  }

  protected selectSection(section: TerminalSection): void {
    this.queue.push(section);
    this.processQueue();
  }

  private processQueue(): void {
    if (this.typingTimer !== null && this.typingLine() !== null) {
      return;
    }
    const section = this.queue.shift();
    if (section === undefined) {
      return;
    }
    this.typeCommand(section, 0);
  }

  private typeCommand(
    section: TerminalSection,
    charIndex: number,
    delayMs: number = section.command.length / TYPING_SPEED_DIVISOR,
  ): void {
    this.typingLine.set(section.command.slice(0, charIndex));

    if (charIndex >= section.command.length) {
      this.typingTimer = null;
      this.typingLine.set(null);
      this.history.update((entries) => [
        ...entries,
        { type: 'command', text: section.command },
        { type: 'output', text: JSON.stringify(section.output, null, 2) },
      ]);
      this.processQueue();
      return;
    }

    this.typingTimer = setTimeout(
      () => this.typeCommand(section, charIndex + 1, delayMs),
      delayMs,
    );
  }
}
