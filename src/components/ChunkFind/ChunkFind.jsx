import { useState } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import { printAsciiChunk } from './utils';

const ChunkFind = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [output, setOutput] = useState('');
  const [timer, setTimer] = useState(null);

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
      <InputForm
        x={x}
        z={z}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <OutputDisplay output={output} />
    </div>
  );
};

export default ChunkFind;