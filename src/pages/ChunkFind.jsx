import { useState } from 'react';

const ChunkFind = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [output, setOutput] = useState('');
  const [timer, setTimer] = useState(null);

  const calcVal = (coord) => {
    if (coord >= 0 && coord <= 15) return 0;
    if (coord >= -15 && coord <= 0) return -15;
    return Math.floor(coord / 16) * 16;
  };

  const printAsciiChunk = (x, z) => {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'x') setX(value);
    if (name === 'z') setZ(value);

    if (timer) clearTimeout(timer);

    setTimer(setTimeout(() => {
      if (value !== '' && x !== '' && z !== '') {
        const chunkOutput = printAsciiChunk(Number(name === 'x' ? value : x), Number(name === 'z' ? value : z));
        setOutput(chunkOutput);
      }
    }, 500));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (x !== '' && z !== '') {
      const chunkOutput = printAsciiChunk(Number(x), Number(z));
      setOutput(chunkOutput);
    } else {
      setOutput('Invalid input, please enter both X and Z coordinates.');
    }
  };

  return (
    <div>
      <h1>Chunk Finder</h1>
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
        <button type="submit">Find Chunk</button>
      </form>
      {output && (
        <pre>
          {output}
        </pre>
      )}
    </div>
  );
};

export default ChunkFind;