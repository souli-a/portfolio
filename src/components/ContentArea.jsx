import '../styles/ContentArea.scss';
import Navbar from './Navbar';
import Projects from './Projects.jsx';
import Home from './Home.jsx';
import Contact from './Contact.jsx';

const ContentArea = () => {
  return (
    <div className="contentArea-root-div">
      <div className="content-div">
        <Navbar />
        <Home />
      </div>
    </div>
  );
};

export default ContentArea;
