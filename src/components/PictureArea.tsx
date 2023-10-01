import avatar from '/images/avatar.png';
import Atropos from 'atropos/react';
import '../styles/picture-area.scss';

const PictureArea = () => {
  return (
    <div className="picture-area-root-div">
      <div className="line" />
      <div className="picture-div">
        <Atropos className="my-atropos" highlight={false} shadow={false}>
          <img src={avatar} />
        </Atropos>
      </div>
      <div className="line" />
    </div>
  );
};

export default PictureArea;
