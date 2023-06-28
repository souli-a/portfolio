import '../styles/ContentArea.scss';
import Navbar from './Navbar';
import Contact from './Contact.jsx';

const ContentArea = () => {
  return (
    <div className="contentArea-root-div">
      <div className="content-div">
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default ContentArea;
