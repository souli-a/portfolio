import '../styles/PictureArea.scss';
import picture from '../../public/images/picture-as-a-kid.png';

const PictureArea = () => {
  return (
    <div className="pictureArea-root-div">
      <div className="picture-div">
        <img src={picture} />
      </div>
    </div>
  );
};

export default PictureArea;
