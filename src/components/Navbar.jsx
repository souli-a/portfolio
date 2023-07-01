import '../styles/Navbar.scss';
import { useState, useEffect } from 'react';

const Navbar = ({ setActiveComponent, activeComponent }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="navbar-root-div">
      <button
        className={`home-button ${activeComponent === 'home' ? 'active' : ''}`}
        onClick={() => handleClick('home')}
      >
        {viewportWidth < 500 && activeComponent !== 'home' ? '👋' : 'SALUT'}
      </button>
      <button
        className={`projects-button ${
          activeComponent === 'projects' ? 'active' : ''
        }`}
        onClick={() => handleClick('projects')}
      >
        {viewportWidth < 500 && activeComponent !== 'projects'
          ? '🚧'
          : 'PROJETS'}
      </button>
      <button
        className={`contact-button ${
          activeComponent === 'contact' ? 'active' : ''
        }`}
        onClick={() => handleClick('contact')}
      >
        {viewportWidth < 500 && activeComponent !== 'contact'
          ? '☎️'
          : 'CONTACT'}
      </button>
    </div>
  );
};

export default Navbar;
