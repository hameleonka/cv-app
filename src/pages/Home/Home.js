import PhotoBox from '../../components/PhotoBox';
import RouterButton from '../../components/RouterButton';
import photo from '../../assets/images/natalia_milovanova_photo.png';

import './home.scss';

function Home() {
  return (
    <div className="c-home">
      <div className="l-home">
        <div className="c-home__photobox">
          <PhotoBox
            name="Natalia Milovanova"
            title="Front-end web developer"
            description="I build interactive apps that run across platforms & devices."
            avatar={photo}
          />
        </div>
        <RouterButton
          text="Know more"
          page="inner"
        />
      </div>
      <div className="c-home__overlay" />
    </div>
  );
}

export default Home;
