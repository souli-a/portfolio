import ContentArea from '../components/ContentArea';
import PictureArea from '../components/PictureArea';
import '../styles/Portfolio.scss';

const Portfolio = () => {
  return (
    <div className="portfolio-root-div">
      <ContentArea />
      <PictureArea />
    </div>
  );
};

export default Portfolio;
