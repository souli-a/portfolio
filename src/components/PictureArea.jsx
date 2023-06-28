import '../styles/PictureArea.scss';
import picture from '../../public/images/picture-as-a-kid.png';

const PictureArea = () => {
  return (
    <div className="pictureArea-root-div">
      <div className="line" />
      <div className="picture-div">
        <img src={picture} />
      </div>
      <div className="line" />
    </div>
  );
};

export default PictureArea;
