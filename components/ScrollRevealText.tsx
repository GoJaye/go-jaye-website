'use client';

import { useEffect, useRef } from 'react';

type Props = {
  paragraphs: string[];
  activeColor?: string;
  inactiveColor?: string;
  textStyle?: React.CSSProperties;
  paragraphSpacing?: string;
};

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const n = parseInt(full, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function ScrollRevealText({
  paragraphs,
  activeColor = '#1A1A1A',
  inactiveColor = '#C9CDD4',
  textStyle,
  paragraphSpacing = '28px',
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const words = Array.from(root.querySelectorAll<HTMLElement>('[data-word]'));
    const from = hexToRgb(inactiveColor);
    const to = hexToRgb(activeColor);
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;
      const start = vh * 0.82; // word starts revealing when it passes this line
      const end = vh * 0.42; // fully revealed past this line
      for (const w of words) {
        const r = w.getBoundingClientRect();
        const mid = r.top + r.height / 2;
        const p = Math.max(0, Math.min(1, (start - mid) / (start - end)));
        const c = [
          Math.round(from[0] + (to[0] - from[0]) * p),
          Math.round(from[1] + (to[1] - from[1]) * p),
          Math.round(from[2] + (to[2] - from[2]) * p),
        ];
        w.style.color = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [activeColor, inactiveColor]);

  return (
    <div ref={rootRef}>
      {paragraphs.map((para, pi) => (
        <p
          key={pi}
          style={{
            ...textStyle,
            margin: 0,
            marginTop: pi === 0 ? 0 : paragraphSpacing,
          }}
        >
          {para.split(' ').map((word, wi) => (
            <span key={wi} data-word style={{ color: inactiveColor }}>
              {word}
              {wi < para.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
