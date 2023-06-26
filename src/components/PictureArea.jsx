import '../styles/PictureArea.scss';
import picture from '../../public/images/picture-as-a-kid.png';

const PictureArea = () => {
  return (
    <div className="root-div">
      <div className="line-div">
        <div className="line" />
      </div>
      <div className="picture-div">
        <img src={picture} />
      </div>
      <div className="line-div">
        <div className="line" />
      </div>
    </div>
  );
};

export default PictureArea;
