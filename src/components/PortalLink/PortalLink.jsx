import { useState, useEffect } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import { calculateOutput } from './utils';

const PortalLink = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [origin, setOrigin] = useState('overworld');
  const [output, setOutput] = useState('');
  const [timer, setTimer] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'x') setX(value);
    if (name === 'z') setZ(value);
    if (name === 'origin') setOrigin(value);

    if (timer) clearTimeout(timer);
    if (name === 'origin') return;

    setTimer(setTimeout(() => {
      if (x !== '' && z !== '') {
        const xVal = parseInt(name === 'x' ? value : x, 10);
        const zVal = parseInt(name === 'z' ? value : z, 10);
        setOutput(calculateOutput(xVal, zVal, origin));
      }
    }, 1000));
  };

  useEffect(() => {
    if (x !== '' && z !== '') {
      const xVal = parseInt(x, 10);
      const zVal = parseInt(z, 10);
      setOutput(calculateOutput(xVal, zVal, origin));
    }
  }, [origin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (x !== '' && z !== '') {
      const xVal = parseInt(x, 10);
      const zVal = parseInt(z, 10);
      setOutput(calculateOutput(xVal, zVal, origin));
    } else {
      setOutput('Invalid input, please enter both X and Z coordinates.');
    }
  };

  return (
    <div>
      <h1>Portal Link Finder</h1>
      <InputForm
        x={x}
        z={z}
        origin={origin}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <OutputDisplay output={output} />
    </div>
  );
};

export default PortalLink;