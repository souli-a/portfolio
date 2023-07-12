import '../styles/PictureArea.scss';
import picture from '../../public/images/picture-as-a-kid.png';
import Atropos from 'atropos/react';
const PictureArea = () => {
  return (
    <div className="pictureArea-root-div">
      <div className="line" />
      <div className="picture-div">
        <Atropos className="my-atropos" highlight={false} shadow={false}>
          <img src={picture} />
        </Atropos>
      </div>
      <div className="line" />
    </div>
  );
};

export default PictureArea;
