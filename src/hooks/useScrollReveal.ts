import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useScrollRevealAll(selector: string, threshold = 0.12) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    const observers: IntersectionObserver[] = [];

    elements.forEach((el, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (el as HTMLElement).classList.add("visible");
            }, i * 80);
            observer.disconnect();
          }
        },
        { threshold }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [selector, threshold]);
}
