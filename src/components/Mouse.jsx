import { useState, useEffect } from 'react';
import '../styles/Mouse.scss';

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = mousePosition.x - 38;
  const y = mousePosition.y - 38;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      className="follow-mouse"
    ></div>
  );
};

export default Mouse;
