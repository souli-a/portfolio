import '../styles/ContentArea.scss';
import Navbar from './Navbar';
import Home from './Home.jsx';

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
