export function BlogPagination({ pages, current }: { pages: number; current: number }) {
  if (pages <= 1) return null;
  const href = (page: number) => page === 1 ? '/blog' : `/blog/page/${page}`;
  const visible = Array.from({ length: pages }, (_, i) => i + 1).filter(page => page === 1 || page === pages || Math.abs(page - current) <= 2);
  return <nav className="pagination compact-pagination" aria-label="Blog pages">
    {current > 1 && <a href={href(current - 1)} aria-label="Previous page">← Previous</a>}
    {visible.map((page, index) => <span className="pagination-item" key={page}>{index > 0 && page - visible[index - 1] > 1 && <span className="pagination-ellipsis" aria-hidden="true">…</span>}<a aria-current={page === current ? 'page' : undefined} href={href(page)}>{page}</a></span>)}
    {current < pages && <a href={href(current + 1)} aria-label="Next page">Next →</a>}
  </nav>;
}
