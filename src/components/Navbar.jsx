import '../styles/Navbar.scss';

const Navbar = ({ setActiveComponent, activeComponent }) => {
  const handleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="navbar-root-div">
      <button
        className={`home-button ${activeComponent === 'home' ? 'active' : ''}`}
        onClick={() => handleClick('home')}
      >
        👋
      </button>
      <button
        className={`projects-button ${
          activeComponent === 'projects' ? 'active' : ''
        }`}
        onClick={() => handleClick('projects')}
      >
        PROJETS
      </button>
      <button
        className={`contact-button ${
          activeComponent === 'contact' ? 'active' : ''
        }`}
        onClick={() => handleClick('contact')}
      >
        CONTACT
      </button>
      {/*       <button className="switchMode-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z" />
        </svg>
      </button> */}
    </div>
  );
};

export default Navbar;
