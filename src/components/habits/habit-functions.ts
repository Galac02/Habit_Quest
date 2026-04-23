export function dayPassed(lastCheck: Date): boolean {
  const now = new Date();

  // 24 hours in milliseconds
  const twentyFourHoursInMs = 24 * 60 * 60 * 1000;
  // Calculate difference
  const diffInMs = now.getTime() - lastCheck.getTime();

  return diffInMs > twentyFourHoursInMs;
}

export const oneDay = 24 * 60 * 60 * 1000;
