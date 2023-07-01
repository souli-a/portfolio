import { useState, useEffect } from 'react';
import '../styles/Mouse.scss';

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const html = document.querySelector('html');
    if (viewportWidth < 600) {
      html.style.cursor = 'initial';
    } else {
      html.style.cursor = 'none';
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
      };
      document.addEventListener('mousemove', handleMouseMove);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, [viewportWidth]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const x = mousePosition.x - 30;
  const y = mousePosition.y - 30;

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
