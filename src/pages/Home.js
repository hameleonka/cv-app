import { useHistory } from "react-router-dom";

import PhotoBox from "../components/PhotoBox/index";
import Button from "../components/Button/index";

import './home.scss';

function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/inner");
  }
  return (
    <div className="c-home">
      <div className="l-home">
        <div className="c-home__photobox">
          <PhotoBox
            name="John Doe"
            title="Programmer. Creative. Innovator"
            description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
            avatar="http://avatars0.githubusercontent.com/u/246180?v=4"
          />
        </div>
        <Button text="Know more" page="inner"/>
      </div>
      <div className="c-home__overlay"></div>
    </div>
  )
}

export default Home;