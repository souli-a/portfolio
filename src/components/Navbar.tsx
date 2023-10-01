import { useState, useEffect } from 'react';
import '../styles/navbar.scss';

interface NavbarProps {
  setActiveComponent: (component: string) => void;
  activeComponent: string;
}

const buttons = [
  { label: 'Hi', icon: '👋', value: 'home' },
  { label: 'Projects', icon: '🚧', value: 'projects' },
  { label: 'Contact', icon: '☎️', value: 'contact' },
];

const Navbar = ({ setActiveComponent, activeComponent }: NavbarProps) => {
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

  const handleClick = (component: string) => {
    setActiveComponent(component);
  };

  return (
    <div className="navbar-root-div">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={`${button.value}-button ${
            activeComponent === button.value ? 'active' : ''
          }`}
          onClick={() => handleClick(button.value)}
        >
          {viewportWidth < 500 && activeComponent !== button.value
            ? button.icon
            : button.label}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
