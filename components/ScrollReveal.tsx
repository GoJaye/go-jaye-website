'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export type ScrollAnimation = 'rise' | 'slide-left' | 'slide-right';

type ScrollRevealProps = {
  children: ReactNode;
  animation?: ScrollAnimation;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** Trigger animation once this fraction of the element is visible. */
  threshold?: number;
  /** Re-animate when scrolling in and out of view. */
  repeat?: boolean;
};

const hiddenTransform: Record<ScrollAnimation, string> = {
  rise: 'translateY(52px)',
  'slide-left': 'translateX(-72px)',
  'slide-right': 'translateX(72px)',
};

export default function ScrollReveal({
  children,
  animation = 'rise',
  delay = 0,
  duration = 750,
  className,
  style,
  threshold = 0.08,
  repeat = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (repeat) {
          setVisible(entry.isIntersecting);
        } else if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -4% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, repeat]);

  const activeTransform = visible ? 'none' : hiddenTransform[animation];

  return (
    <div
      ref={ref}
      className={className}
      data-scroll-reveal=""
      style={{
        ...style,
        minHeight: style?.minHeight ?? 1,
        opacity: visible ? 1 : 0,
        transform: activeTransform,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: visible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
