'use client';

import { useEffect, useRef, useState } from 'react';

export type TableOfContentsItem = { id: string; label: string };

export function ActiveTableOfContents({ items, title = 'On this page' }: { items: readonly TableOfContentsItem[]; title?: string }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.id)).filter((node): node is HTMLElement => Boolean(node));
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveId(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.01, 0.25] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const links = <ol>{items.map((item) => <li key={item.id}><a href={`#${item.id}`} aria-current={activeId === item.id ? 'location' : undefined} onClick={() => { setActiveId(item.id); if (detailsRef.current && matchMedia('(max-width: 980px)').matches) detailsRef.current.open = false; }}>{item.label}</a></li>)}</ol>;
  if (!items.length) return null;

  return <div className="active-toc"><nav className="active-toc-desktop" aria-label={title}><h2>{title}</h2>{links}</nav><details className="active-toc-mobile" ref={detailsRef}><summary>Jump to a section</summary><nav aria-label={title}>{links}</nav></details></div>;
}
