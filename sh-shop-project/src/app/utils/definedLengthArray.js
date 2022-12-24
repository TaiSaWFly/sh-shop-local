export function definedLengthArray(data, arrayLength = 4) {
  const definedLength = data.filter((_, index) => index < arrayLength);
  return definedLength;
}
