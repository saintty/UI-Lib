export const createPageArray = ({
  current,
  siblings,
  total,
}: {
  current: number;
  total: number;
  siblings: number;
}) => {
  const pages: (number | string)[] = [];

  const start = Math.max(2, current - siblings);
  const end = Math.min(total - 1, current + siblings);

  pages.push(1);

  if (start > 2) pages.push("…");

  for (let i = start; i <= end; i++) pages.push(i);

  if (end < total - 1) pages.push("…");
  if (total > 1) pages.push(total);

  return pages;
};
