export const calcVal = (coord, isOverworld = true) => {
  return isOverworld ? Math.round(coord / 8) : Math.round(coord * 8);
};

export const sizeMatch = (title, coords) => {
  const halfTitle = title.length / 2;
  const halfCoords = coords.length / 2;

  if (title.length > coords.length) {
    coords = coords.padStart(coords.length + (halfTitle - halfCoords), ' ');
    coords = coords.padEnd(title.length, ' ');
  } else {
    title = title.padStart(title.length + (halfCoords - halfTitle), ' ');
    title = title.padEnd(coords.length, ' ');
  }

  return [title, coords];
};

export const printCoords = (coords) => {
  const overworldTitle = ":: Overworld ::";
  const overworldCoords = `X:${coords.overworldX}, Z:${coords.overworldZ}`;
  const [owTitle, owCoords] = sizeMatch(overworldTitle, overworldCoords);

  const netherTitle = "::  Nether  ::";
  const netherCoords = `X:${coords.netherX}, Z:${coords.netherZ}`;
  const [nTitle, nCoords] = sizeMatch(netherTitle, netherCoords);

  const linksTo = "  --links to--  ";

  return `
    Portal Linking Coords (estimate):
    ${owTitle} ${' '.repeat(linksTo.length)} ${nTitle}
    ${owCoords} ${linksTo} ${nCoords}
  `;
};

export const calculateOutput = (xVal, zVal, originVal) => {
  const isOverworld = originVal.toLowerCase() === 'overworld';
  const result = {
    netherX: isOverworld ? calcVal(xVal) : xVal,
    netherZ: isOverworld ? calcVal(zVal) : zVal,
    overworldX: isOverworld ? xVal : calcVal(xVal, false),
    overworldZ: isOverworld ? zVal : calcVal(zVal, false),
  };
  return printCoords(result);
};