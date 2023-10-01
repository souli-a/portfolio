import { useState, useEffect } from 'react';
import '../styles/mouse.scss';

const Mouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const cursorDiv = document.querySelector('.follow-mouse') as HTMLDivElement;
    const secondCursorDiv = document.querySelector(
      '.second-follow-mouse'
    ) as HTMLDivElement;
    const html = document.querySelector('html') as HTMLHtmlElement;

    if (viewportWidth < 600) {
      html.style.cursor = 'initial';
      cursorDiv.style.display = 'none';
      secondCursorDiv.style.display = 'none';
    } else {
      html.style.cursor = 'none';
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        setMousePosition({ x: clientX, y: clientY });
        cursorDiv.style.display = 'initial';
        secondCursorDiv.style.display = 'initial';
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

  const x = mousePosition.x - 5;
  const y = mousePosition.y - 5;

  return (
    <>
      <div
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
        className="follow-mouse"
      ></div>
      <div
        className="second-follow-mouse"
        style={{
          transform: `translate(${x}px, ${y}px)`,
        }}
      ></div>
    </>
  );
};

export default Mouse;
