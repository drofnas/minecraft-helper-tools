import { useState } from 'react';

const PortalLink = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [origin, setOrigin] = useState('overworld');
  const [output, setOutput] = useState('');
  const [timer, setTimer] = useState(null);

  const calcVal = (coord, isOverworld = true) => {
    return isOverworld ? Math.floor(coord / 8) : coord * 8;
  };

  const sizeMatch = (title, coords) => {
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

  const printCoords = (coords) => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'x') setX(value);
    if (name === 'z') setZ(value);
    if (name === 'origin') setOrigin(value);

    if (timer) clearTimeout(timer);

    setTimer(setTimeout(() => {
      if (x !== '' && z !== '') {
        const isOverworld = origin.toLowerCase() === 'overworld';
        const result = {
          netherX: isOverworld ? calcVal(Number(x)) : Number(x),
          netherZ: isOverworld ? calcVal(Number(z)) : Number(z),
          overworldX: isOverworld ? Number(x) : calcVal(Number(x), false),
          overworldZ: isOverworld ? Number(z) : calcVal(Number(z), false),
        };
        const coordsOutput = printCoords(result);
        setOutput(coordsOutput);
      }
    }, 1000));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (x !== '' && z !== '') {
      const isOverworld = origin.toLowerCase() === 'overworld';
      const result = {
        netherX: isOverworld ? calcVal(Number(x)) : Number(x),
        netherZ: isOverworld ? calcVal(Number(z)) : Number(z),
        overworldX: isOverworld ? Number(x) : calcVal(Number(x), false),
        overworldZ: isOverworld ? Number(z) : calcVal(Number(z), false),
      };
      const coordsOutput = printCoords(result);
      setOutput(coordsOutput);
    } else {
      setOutput('Invalid input, please enter both X and Z coordinates.');
    }
  };

  return (
    <div>
      <h1>Portal Link Finder</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            X Coordinate:
            <input type="number" name="x" value={x} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Z Coordinate:
            <input type="number" name="z" value={z} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Origin:
            <select name="origin" value={origin} onChange={handleInputChange}>
              <option value="overworld">Overworld</option>
              <option value="nether">Nether</option>
            </select>
          </label>
        </div>
        <button type="submit">Find Portal Link</button>
      </form>
      {output && (
        <pre>
          {output}
        </pre>
      )}
    </div>
  );
};

export default PortalLink;