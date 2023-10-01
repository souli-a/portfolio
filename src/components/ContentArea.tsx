import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Projects from './Projects';
import Home from './Home';
import Contact from './Contact';
import '../styles/content-area.scss';

const ContentArea = () => {
  const [activeComponent, setActiveComponent] = useState(() => {
    const storedComponent = sessionStorage.getItem('currentPage');
    return storedComponent !== null ? storedComponent : 'home';
  });

  useEffect(() => {
    sessionStorage.setItem('currentPage', activeComponent);
  }, [activeComponent]);

  return (
    <div className="contentArea-root-div">
      <div className="content-div">
        <Navbar
          setActiveComponent={setActiveComponent}
          activeComponent={activeComponent}
        />
        {activeComponent === 'projects' && <Projects />}
        {activeComponent === 'contact' && <Contact />}
        {activeComponent === 'home' && <Home />}
      </div>
    </div>
  );
};

export default ContentArea;
