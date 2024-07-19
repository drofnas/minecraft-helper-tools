import { useState, useEffect } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';

const PortalLink = () => {
  const [x, setX] = useState('');
  const [z, setZ] = useState('');
  const [origin, setOrigin] = useState('overworld');
  const [coordinates, setCoordinates] = useState(null);
  const [timer, setTimer] = useState(null);

  const calculateCoordinates = (xVal, zVal, originVal) => {
    const isOverworld = originVal.toLowerCase() === 'overworld';
    const overworld = {
      x: isOverworld ? xVal : xVal * 8,
      z: isOverworld ? zVal : zVal * 8,
    };
    const nether = {
      x: isOverworld ? Math.round(xVal / 8) : xVal,
      z: isOverworld ? Math.round(zVal / 8) : zVal,
    };

    setCoordinates({ overworld, nether });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'x') setX(value);
    if (name === 'z') setZ(value);
    if (name === 'origin') setOrigin(value);
  };

  useEffect(() => {
    if (x !== '' && z !== '') {
      if (timer) clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          calculateCoordinates(Number(x), Number(z), origin);
        }, 250)
      );
    }
  }, [x, z, origin]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (x !== '' && z !== '') {
      calculateCoordinates(Number(x), Number(z), origin);
    } else {
      setCoordinates(null);
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
      {coordinates && <OutputDisplay coordinates={coordinates} />}
    </div>
  );
};

export default PortalLink;