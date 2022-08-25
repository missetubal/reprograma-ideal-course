export const diffYears = (date: string) => {
  const now = new Date();
  const input = new Date(date);
  const timeDiff = Math.abs(now.getTime() - input.getTime());
  const diff = Math.trunc(timeDiff / (1000 * 3600 * 24) / 365);
  return diff;
};
