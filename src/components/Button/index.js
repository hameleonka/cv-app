import { useHistory } from "react-router-dom";
import './index.scss';

function Button(props) {
  let history = useHistory();

  function handleClick() {
    if (props.page === "inner") {
      history.push("/inner");
    }
    if (props.page === "home") {
      history.push("/home");
    }
  }
  return (
    <button className={`button ${props.classes}`}
      onClick={handleClick}>
      {props.icon}{props.text}
    </button>
  )
}

export default Button;