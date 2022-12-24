export function parseDate(date) {
  const parseDate = new Date(parseInt(date)).toLocaleString("en-GB", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  return parseDate;
}
