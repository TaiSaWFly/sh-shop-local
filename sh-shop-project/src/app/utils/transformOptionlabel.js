export function transformOptionlabel(str) {
  const highestNumber = 10000;
  const splitStr = str.split("-");
  let transformOptionNumber = splitStr.map((s) => Number(s));

  if (!Number(transformOptionNumber[0])) {
    const split = str.split(" ");
    const filterStr = split.filter((s) => Number(s));
    transformOptionNumber = filterStr.map((s) => Number(s));
    transformOptionNumber.push(highestNumber);
  }
  return transformOptionNumber;
}
