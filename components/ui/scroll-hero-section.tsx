'use client';

import { useEffect } from 'react';

type Theme = 'system' | 'light' | 'dark';

export type WordHeroPageProps = {
  /** Words that cycle in the sticky header */
  items?: string[];
  /** Show the footer attribution */
  showFooter?: boolean;
  /** UI theme */
  theme?: Theme;
  /** Enable view-timeline animations if supported */
  animate?: boolean;
  /** Accent hue (0–359) — used for the highlight band colour */
  hue?: number;
  /** Where the highlight band starts (vh) */
  startVh?: number;
  /** Space (vh) below the sticky header block */
  spaceVh?: number;
  /** Debug outline (for dev) */
  debug?: boolean;
  /** HTML string shown in the "main" tagline section */
  taglineHTML?: string;
};

export function WordHeroPage({
  items = ['design.', 'prototype.', 'solve.', 'build.', 'develop.', 'cook.', 'ship.'],
  showFooter = false,
  theme = 'system',
  animate = true,
  hue = 280,
  startVh = 50,
  spaceVh = 50,
  debug = false,
  taglineHTML = `Learn. Design. Build.`,
}: WordHeroPageProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.heroTheme = theme;
    root.dataset.heroAnimate = String(animate);
    root.dataset.heroDebug = String(debug);
    root.style.setProperty('--hero-hue', String(hue));
    root.style.setProperty('--hero-start', `${startVh}vh`);
    root.style.setProperty('--hero-space', `${spaceVh}vh`);
  }, [theme, animate, debug, hue, startVh, spaceVh]);

  return (
    <div
      className="hero-scroll-root min-h-screen w-full overflow-x-hidden"
      style={{ ['--hero-count' as string]: items.length } as React.CSSProperties}
    >
      {/* Sticky cycling-words header */}
      <header className="hero-header fluid-hero">
        <section className="hero-header-inner">
          <h1 className="hero-label">
            <span aria-hidden="true">you can&nbsp;</span>
            <span className="sr-only">you can {items[0]}</span>
          </h1>
          <ul aria-hidden="true">
            {items.map((word, i) => (
              <li
                key={i}
                className="hero-word"
                style={{ ['--hero-i' as string]: i } as React.CSSProperties}
              >
                {word}
              </li>
            ))}
          </ul>
        </section>
      </header>

      {/* Main reveal panel */}
      <main className="hero-main">
        <section className="hero-main-inner fluid-hero">
          <p
            className="hero-tagline"
            dangerouslySetInnerHTML={{ __html: taglineHTML }}
          />
        </section>
      </main>

      {showFooter && (
        <footer className="hero-footer">
          Learn Archi &copy; {new Date().getFullYear()}
        </footer>
      )}
    </div>
  );
}
