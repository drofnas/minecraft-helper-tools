export const calcVal = (coord) => {
  if (coord >= 0 && coord <= 15) return 0;
  if (coord >= -15 && coord <= 0) return -15;
  return Math.floor(coord / 16) * 16;
};

export const printAsciiChunk = (x, z) => {
  const xCalc = calcVal(x);
  const zCalc = calcVal(z);
  const xEnd = xCalc + 15;
  const zEnd = zCalc + 15;

  const lenX = String(xCalc).length;
  const lenX15 = String(xEnd).length;
  const lenZ = String(zCalc).length;
  const lenZ15 = String(zEnd).length;

  const spaceX = ''.padStart(lenX, ' ');
  const spaceZx15 = ''.padStart(15 - (lenZ + lenX15), ' ');
  const spaceZ15x15 = ''.padStart(15 - (lenZ15 + lenX15), ' ');

  return `
    ${xCalc},${zCalc}${spaceZx15}${xEnd},${zCalc}
    ${spaceX}----------------
    ${spaceX}-              -
    ${spaceX}-              -
    ${spaceX}-              -
    ${spaceX}-              -
    ${spaceX}----------------
    ${xCalc},${zEnd}${spaceZ15x15}${xEnd},${zEnd}
  `;
};