import ContentArea from '../components/ContentArea';
import PictureArea from '../components/PictureArea';
import Mouse from '../components/Mouse';
import '../styles/Portfolio.scss';
import useTitlePage from '../hooks/useTitlePage';

const Portfolio = () => {
  useTitlePage({ title: 'Soulimane' });

  return (
    <div className="portfolio-root-div">
      <Mouse />
      <ContentArea />
      <PictureArea />
    </div>
  );
};

export default Portfolio;
