import React, { useState } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import { calcVal } from './utils';

const ChunkFind = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [coordinates, setCoordinates] = useState(null);
  const [timer, setTimer] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'x') setX(value);
    if (name === 'z') setZ(value);

    if (timer) clearTimeout(timer);

    setTimer(setTimeout(() => {
      if (value !== '' && x !== '' && z !== '') {
        calculateCoordinates(Number(name === 'x' ? value : x), Number(name === 'z' ? value : z));
      }
    }, 500));
  };

  const calculateCoordinates = (xVal, zVal) => {
    const xStart = calcVal(xVal);
    const zStart = calcVal(zVal);
    const xEnd = xStart + 15;
    const zEnd = zStart + 15;

    setCoordinates({
      topLeft: { x: xStart, z: zStart },
      topRight: { x: xEnd, z: zStart },
      bottomLeft: { x: xStart, z: zEnd },
      bottomRight: { x: xEnd, z: zEnd },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (x !== '' && z !== '') {
      calculateCoordinates(Number(x), Number(z));
    } else {
      setCoordinates(null);
    }
  };

  return (
    <div>
      <h1>Chunk Finder</h1>
      <InputForm
        x={x}
        z={z}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      {coordinates && <OutputDisplay coordinates={coordinates} />}
    </div>
  );
};

export default ChunkFind;